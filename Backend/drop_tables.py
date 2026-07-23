import asyncio
from app.db.session import AsyncSessionLocal
from sqlalchemy import text

async def clear_db():
    async with AsyncSessionLocal() as session:
        await session.execute(text("TRUNCATE TABLE users CASCADE;"))
        await session.commit()
        print("Cleared users table.")

if __name__ == "__main__":
    asyncio.run(clear_db())
