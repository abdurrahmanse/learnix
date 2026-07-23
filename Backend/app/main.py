import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

# Configure logging (Task 12)
logging.basicConfig(
    level=logging.DEBUG if settings.DEBUG else logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

from contextlib import asynccontextmanager
from app.db.init_db import init_admin_user

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Run at startup
    await init_admin_user()
    yield
    # Run at shutdown
    pass

# Initialize FastAPI (Task 4)
# Configure development settings (Task 13)
app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    debug=settings.DEBUG,
    lifespan=lifespan,
)

from app.api.routers import auth, users

# Configure CORS (Task 9)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(users.router, prefix=f"{settings.API_V1_STR}/users", tags=["users"])

# Create a health check API
@app.get(f"{settings.API_V1_STR}/health")
async def health_check():
    logger.info("Health check endpoint called")
    return {
      "success": True,
      "message": "Backend is running",
      "version": "1.0.0"
    }
