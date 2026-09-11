import os
import logging
from app.db.session import AsyncSessionLocal
from app.db.models.user import User
from app.core.security import get_password_hash
from sqlalchemy.future import select

logger = logging.getLogger(__name__)

async def init_admin_user():
    admin_email = os.getenv("ADMIN_EMAIL", "admin@example.com")
    admin_password = os.getenv("ADMIN_PASSWORD", "ChangeMe123!")

    async with AsyncSessionLocal() as db:
        result = await db.execute(select(User).where(User.email == admin_email))
        user = result.scalars().first()

        if not user:
            logger.info("Default admin user not found. Creating one...")
            admin_user = User(
                email=admin_email,
                username="admin",
                full_name="Administrator",
                hashed_password=get_password_hash(admin_password),
                role="admin",
                is_active=True,
                is_verified=True
            )
            db.add(admin_user)
            await db.commit()
            logger.info("Admin user created successfully.")
        else:
            logger.info("Admin user already exists.")
