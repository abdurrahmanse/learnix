import logging
import sentry_sdk
import redis.asyncio as redis
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from contextlib import asynccontextmanager
from fastapi_limiter import FastAPILimiter

from app.core.config import settings
from app.core.logging import setup_logging
from app.db.init_db import init_admin_user
from app.db.session import engine

# 1. Setup Structured Logging
setup_logging()
logger = logging.getLogger(__name__)

# 2. Setup Sentry
if settings.SENTRY_DSN:
    sentry_sdk.init(
        dsn=settings.SENTRY_DSN,
        environment=settings.ENVIRONMENT,
        traces_sample_rate=1.0 if settings.ENVIRONMENT != "production" else 0.1,
    )
    logger.info("Sentry initialized")

# 3. Setup Lifespan (Redis, Limiter, DB)
@asynccontextmanager
async def lifespan(app: FastAPI):
    if not settings.is_setup_complete:
        logger.warning("Starting in SETUP MODE. Bypassing DB/Redis initialization.")
        yield
        return

    # Initialize Redis & Rate Limiter
    redis_client = redis.from_url(settings.REDIS_URL, encoding="utf-8", decode_responses=True)
    await FastAPILimiter.init(redis_client)
    logger.info("FastAPILimiter initialized with Redis")
    
    # Initialize Admin User
    await init_admin_user()
    
    yield
    
    # Cleanup
    if redis_client:
        await redis_client.close()
    if engine:
        await engine.dispose()
    logger.info("Shutdown cleanup complete")

# 4. Initialize FastAPI
app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    debug=settings.DEBUG,
    lifespan=lifespan,
)

# 5. Security Middlewares
app.add_middleware(
    TrustedHostMiddleware, allowed_hosts=["*"] if settings.ENVIRONMENT != "production" else ["api.learnix.com", "localhost"]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from fastapi import Request, Response
import json

@app.middleware("http")
async def setup_middleware(request: Request, call_next):
    if not settings.is_setup_complete:
        path = request.url.path
        if path.startswith(f"{settings.API_V1_STR}/setup") or path.startswith(f"{settings.API_V1_STR}/health") or path == "/docs" or path == "/openapi.json":
            return await call_next(request)
        return Response(
            content=json.dumps({"setup_required": True, "message": "Application is not configured."}),
            status_code=503,
            media_type="application/json"
        )
    return await call_next(request)

from app.api.routers import auth, users, courses, media, setup  # noqa: E402

app.include_router(setup.router, prefix=f"{settings.API_V1_STR}/setup", tags=["setup"])

if settings.is_setup_complete:
    app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
    app.include_router(users.router, prefix=f"{settings.API_V1_STR}/users", tags=["users"])
    app.include_router(courses.router, prefix=f"{settings.API_V1_STR}/courses", tags=["courses"])
    app.include_router(media.router, prefix=f"{settings.API_V1_STR}/media", tags=["media"])

# 6. Robust Health Check
@app.get(f"{settings.API_V1_STR}/health")
async def health_check():
    health_status = {
        "status": "ok" if settings.is_setup_complete else "setup_required",
        "setup_required": not settings.is_setup_complete,
        "environment": settings.ENVIRONMENT,
        "database": "unreachable",
        "redis": "unreachable"
    }
    
    if not settings.is_setup_complete:
        return health_status

    # Ping Redis
    try:
        r = redis.from_url(settings.REDIS_URL, encoding="utf-8", decode_responses=True)
        await r.ping()
        health_status["redis"] = "ok"
        await r.close()
    except Exception as e:
        logger.error(f"Redis health check failed: {e}")

    # Ping DB
    try:
        async with engine.connect() as conn:
            from sqlalchemy import text
            await conn.execute(text("SELECT 1"))
        health_status["database"] = "ok"
    except Exception as e:
        logger.error(f"Database health check failed: {e}")

    if health_status["database"] != "ok" or health_status["redis"] != "ok":
        return Response(content=json.dumps(health_status), status_code=503, media_type="application/json")

    return health_status
