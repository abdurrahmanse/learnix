import asyncio
from app.db.session import AsyncSessionLocal
from sqlalchemy import text

async def test_db():
    try:
        async with AsyncSessionLocal() as session:
            await session.execute(text("SELECT 1"))
            print("DB_CONNECTED_SUCCESSFULLY")
    except Exception as e:
        print(f"DB_ERROR: {e}")

asyncio.run(test_db())
