from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from app.core.config import settings

# Configure SQLAlchemy 2.0 and PostgreSQL (Neon)
if settings.DATABASE_URL:
    engine = create_async_engine(settings.DATABASE_URL, echo=settings.DEBUG)
    AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False)
else:
    engine = None
    AsyncSessionLocal = None

async def get_db():
    if AsyncSessionLocal is None:
        raise RuntimeError("Database is not configured.")
    async with AsyncSessionLocal() as session:
        yield session
