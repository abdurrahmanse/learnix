from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from fastapi import HTTPException
from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import get_password_hash, verify_password

async def authenticate_user(session: AsyncSession, email: str, password: str) -> User | None:
    result = await session.execute(select(User).where(User.email == email))
    user = result.scalar_one_or_none()
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user

async def get_user_by_email(session: AsyncSession, email: str) -> User | None:
    result = await session.execute(select(User).where(User.email == email))
    return result.scalar_one_or_none()

async def create_user(session: AsyncSession, user_in: UserCreate) -> User:
    db_user = await get_user_by_email(session, email=user_in.email)
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    
    # Check if this is the first user, make them admin
    result = await session.execute(select(User).limit(1))
    first_user = result.scalar_one_or_none()
    role = "admin" if first_user is None else "user"
        
    db_obj = User(
        email=user_in.email,
        hashed_password=get_password_hash(user_in.password),
        role=role,
    )
    session.add(db_obj)
    await session.commit()
    await session.refresh(db_obj)
    return db_obj
