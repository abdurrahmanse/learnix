import asyncio
from sqlalchemy import text
from app.db.session import AsyncSessionLocal

async def add_columns():
    async with AsyncSessionLocal() as session:
        try:
            await session.execute(text("ALTER TABLE users ADD COLUMN avatar_public_id VARCHAR(255);"))
            print("Added avatar_public_id to users.")
        except Exception as e:
            print(f"Error adding avatar_public_id: {e}")
            
        try:
            await session.execute(text("ALTER TABLE courses ADD COLUMN thumbnail_public_id VARCHAR(255);"))
            print("Added thumbnail_public_id to courses.")
        except Exception as e:
            print(f"Error adding thumbnail_public_id: {e}")
            
        await session.commit()

if __name__ == "__main__":
    asyncio.run(add_columns())
