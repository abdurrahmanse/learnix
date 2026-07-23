import asyncio
import argparse
import logging
import random
from sqlalchemy.future import select
from sqlalchemy import delete
from app.db.session import AsyncSessionLocal
from app.db.models.user import User
from app.core.security import get_password_hash

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def clear_data():
    async with AsyncSessionLocal() as db:
        logger.info("Clearing demo users (excluding admin)...")
        # Do not delete the main admin or real users if possible. 
        # For safety, let's delete users that match the demo pattern.
        stmt = delete(User).where(User.email.like("demo_user_%@example.com"))
        await db.execute(stmt)
        await db.commit()
        logger.info("Demo data cleared.")

async def seed_users(count: int):
    async with AsyncSessionLocal() as db:
        logger.info(f"Seeding {count} demo users...")
        for i in range(1, count + 1):
            email = f"demo_user_{i}@example.com"
            # Check if exists
            result = await db.execute(select(User).where(User.email == email))
            if result.scalars().first():
                logger.info(f"User {email} already exists. Skipping.")
                continue
            
            user = User(
                email=email,
                username=f"demouser{i}",
                full_name=f"Demo User {i}",
                hashed_password=get_password_hash("Password123!"),
                role="student",
                is_active=True,
                is_verified=True
            )
            db.add(user)
        await db.commit()
        logger.info(f"Successfully seeded {count} demo users.")

async def main():
    parser = argparse.ArgumentParser(description="Seed the database with demo data.")
    parser.add_argument("--clear", action="store_true", help="Clear existing demo data")
    parser.add_argument("--users", type=int, default=0, help="Number of demo users to create")
    
    args = parser.parse_args()

    if args.clear:
        await clear_data()
    
    if args.users > 0:
        await seed_users(args.users)
        
    if not args.clear and args.users == 0:
        logger.info("No action specified. Use --help to see available options.")

if __name__ == "__main__":
    asyncio.run(main())
