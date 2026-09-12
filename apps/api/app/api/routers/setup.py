from fastapi import APIRouter, HTTPException, BackgroundTasks
import os
import signal
import sys
import subprocess
import secrets
import redis.asyncio as redis
from sqlalchemy.ext.asyncio import create_async_engine
from dotenv import set_key

from app.schemas.setup import SetupRequest, SetupResponse
from app.core.config import settings

router = APIRouter()

@router.post("/", response_model=SetupResponse)
async def perform_setup(request: SetupRequest, background_tasks: BackgroundTasks):
    if settings.is_setup_complete:
        raise HTTPException(status_code=400, detail="Setup is already complete.")

    # 1. Validate Redis
    try:
        r = redis.from_url(request.redis_url, encoding="utf-8", decode_responses=True)
        await r.ping()
        await r.close()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to connect to Redis: {e}")

    # 2. Validate Database
    try:
        engine = create_async_engine(request.database_url)
        async with engine.connect() as conn:
            from sqlalchemy import text
            await conn.execute(text("SELECT 1"))
        await engine.dispose()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to connect to Database: {e}")

    # 3. Write Config to .env
    env_file = ".env"
    
    set_key(env_file, "DATABASE_URL", request.database_url)
    set_key(env_file, "REDIS_URL", request.redis_url)
    
    # Generate SECRET_KEY if not exists
    secret_key = secrets.token_urlsafe(32)
    set_key(env_file, "SECRET_KEY", secret_key)
    
    if request.sentry_dsn:
        set_key(env_file, "SENTRY_DSN", request.sentry_dsn)
    if request.resend_api_key:
        set_key(env_file, "RESEND_API_KEY", request.resend_api_key)
    if request.cloudinary_cloud_name:
        set_key(env_file, "CLOUDINARY_CLOUD_NAME", request.cloudinary_cloud_name)
    if request.cloudinary_api_key:
        set_key(env_file, "CLOUDINARY_API_KEY", request.cloudinary_api_key)
    if request.cloudinary_api_secret:
        set_key(env_file, "CLOUDINARY_API_SECRET", request.cloudinary_api_secret)

    # 4. Run Alembic Migrations
    try:
        env = os.environ.copy()
        env["DATABASE_URL"] = request.database_url
        
        subprocess.run([sys.executable, "-m", "alembic", "upgrade", "head"], check=True, env=env)
    except subprocess.CalledProcessError as e:
        raise HTTPException(status_code=500, detail=f"Failed to run database migrations: {e}")

    # 5. Create Admin User
    try:
        from app.db.session import async_sessionmaker
        engine = create_async_engine(request.database_url)
        AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False)
        async with AsyncSessionLocal() as session:
            from app.models.user import User
            from sqlalchemy.future import select
            from app.core.security import get_password_hash
            
            stmt = select(User).where(User.email == request.admin_email)
            result = await session.execute(stmt)
            existing_user = result.scalars().first()
            if not existing_user:
                new_admin = User(
                    email=request.admin_email,
                    username=request.admin_username,
                    full_name=request.admin_full_name or request.admin_username,
                    hashed_password=get_password_hash(request.admin_password),
                    role="admin",
                    is_active=True,
                    is_verified=True
                )
                session.add(new_admin)
                await session.commit()
        await engine.dispose()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create admin user: {e}")
        
    # 6. Trigger restart
    def trigger_restart():
        os.kill(os.getpid(), signal.SIGTERM)
        
    background_tasks.add_task(trigger_restart)
        
    return SetupResponse(status="success", message="Setup complete. The server is restarting.")
