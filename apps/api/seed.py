import asyncio
from app.db.session import AsyncSessionLocal
from app.db.models.user import User
from app.core.security import get_password_hash

async def seed():
    async with AsyncSessionLocal() as session:
        # Create Admin
        admin = User(
            email="admin@example.com",
            username="admin",
            full_name="Admin User",
            hashed_password=get_password_hash("Admin123!"),
            role="admin",
            is_active=True,
            is_verified=True
        )
        session.add(admin)

        # Create 4 students
        for i in range(1, 5):
            student = User(
                email=f"user{i}@example.com",
                username=f"user{i}",
                full_name=f"Student User {i}",
                hashed_password=get_password_hash("User123!"),
                role="student",
                is_active=True,
                is_verified=True
            )
            session.add(student)

        await session.commit()
        print("Database seeded successfully with 1 admin and 4 users.")

if __name__ == "__main__":
    asyncio.run(seed())
