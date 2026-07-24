import asyncio
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from app.db.base import Base
from app.db.models.user import User
from app.core.config import settings
from sqlalchemy.future import select

engine = create_async_engine(settings.DATABASE_URL, echo=False)
async_session = async_sessionmaker(engine, expire_on_commit=False)

async def test_get():
    async with async_session() as session:
        result = await session.execute(select(User).limit(1))
        user = result.scalars().first()
        if user:
            print(f"User: {user.email}")

asyncio.run(test_get())
