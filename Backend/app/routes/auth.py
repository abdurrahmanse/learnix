from fastapi import APIRouter, Depends, HTTPException, status, Response, Request
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import Any

from app.core.database import get_db
from app.core.security import (
    get_password_hash,
    verify_password,
    create_access_token,
    create_refresh_token
)
from app.api.deps import get_current_active_user
from app.schemas.auth import UserCreate, UserRead, LoginRequest, Token
from app.models.user import User

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def register(user_in: UserCreate, db: AsyncSession = Depends(get_db)) -> Any:
    # Check if user exists
    result = await db.execute(select(User).where(User.email == user_in.email))
    if result.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="The user with this email already exists in the system."
        )
    
    result = await db.execute(select(User).where(User.username == user_in.username))
    if result.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="The username is already taken."
        )
    
    # Create new user
    db_user = User(
        email=user_in.email,
        username=user_in.username,
        full_name=user_in.full_name,
        password_hash=get_password_hash(user_in.password),
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

@router.post("/login", response_model=Token)
async def login(response: Response, login_data: LoginRequest, db: AsyncSession = Depends(get_db)) -> Any:
    # Authenticate user
    result = await db.execute(select(User).where(User.email == login_data.email))
    user = result.scalar_one_or_none()
    
    if not user or not verify_password(login_data.password, user.password_hash):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    
    if not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")

    # Generate tokens
    access_token = create_access_token(user.id, user.role)
    refresh_token = create_refresh_token(user.id, user.role)
    
    # Set HttpOnly cookie for refresh token
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=7 * 24 * 60 * 60, # 7 days
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/refresh", response_model=Token)
async def refresh_token(request: Request, response: Response, db: AsyncSession = Depends(get_db)) -> Any:
    refresh_token = request.cookies.get("refresh_token")
    if not refresh_token:
        raise HTTPException(status_code=401, detail="Refresh token missing")
    
    from app.core.security import decode_token
    from jose import JWTError
    
    try:
        payload = decode_token(refresh_token)
        if payload.get("type") != "refresh":
            raise HTTPException(status_code=401, detail="Invalid token type")
        
        user_id = payload.get("sub")
        role = payload.get("role")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
        
    result = await db.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()
    
    if not user or not user.is_active:
        raise HTTPException(status_code=401, detail="User not found or inactive")

    # Generate new access token
    access_token = create_access_token(user.id, user.role)
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/logout")
async def logout(response: Response) -> Any:
    response.delete_cookie(key="refresh_token")
    return {"detail": "Successfully logged out"}

@router.get("/me", response_model=UserRead)
async def get_current_user_info(current_user: User = Depends(get_current_active_user)) -> Any:
    return current_user
