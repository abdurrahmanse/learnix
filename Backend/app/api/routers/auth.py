from fastapi import APIRouter, Depends, HTTPException, Response, Request, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from jose import jwt, JWTError

from app.core.config import settings

from app.db.session import get_db
from app.core.security import create_access_token, create_refresh_token, verify_refresh_token
from app.schemas.user import UserCreate, UserRead
from app.schemas.token import Token
from app.schemas.auth import VerifyOTP, ForgotPassword, ResetPassword
from app.services.auth_service import AuthService
from app.api.deps import get_current_user
from app.db.models.user import User

router = APIRouter()

@router.post("/register", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def register(user_in: UserCreate, db: AsyncSession = Depends(get_db)):
    """
    Create new user and send OTP.
    """
    auth_service = AuthService(db)
    user = await auth_service.register_user(user_in)
    return user

@router.post("/verify-registration", status_code=status.HTTP_200_OK)
async def verify_registration(data: VerifyOTP, db: AsyncSession = Depends(get_db)):
    """
    Verify user registration with OTP.
    """
    auth_service = AuthService(db)
    await auth_service.verify_registration(data.email, data.otp_code)
    return {"message": "User verified successfully"}


@router.post("/login", response_model=Token)
async def login(
    response: Response,
    db: AsyncSession = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
):
    """
    OAuth2 compatible token login, get an access token for future requests.
    """
    auth_service = AuthService(db)
    tokens = await auth_service.authenticate_user(identifier=form_data.username, password=form_data.password)
    
    # Set HTTP-only cookie for refresh token
    response.set_cookie(
        key="refresh_token",
        value=tokens["refresh_token"],
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=7 * 24 * 60 * 60 # 7 days
    )
    
    return {
        "access_token": tokens["access_token"],
        "token_type": "bearer"
    }

@router.post("/refresh", response_model=Token)
async def refresh_token(request: Request, response: Response):
    """
    Refresh access token using the HTTP-only cookie.
    """
    refresh_token = request.cookies.get("refresh_token")
    if not refresh_token:
        raise HTTPException(status_code=401, detail="Refresh token missing")
        
    try:
        payload = verify_refresh_token(refresh_token)
        user_id = payload.get("sub")
        role = payload.get("role")
        if not user_id or not role:
            raise HTTPException(status_code=401, detail="Invalid token payload")
            
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    # Issue new tokens
    access_token = create_access_token(user_id, role)
    new_refresh_token = create_refresh_token(user_id, role)
    
    # Set HTTP-only cookie for new refresh token
    response.set_cookie(
        key="refresh_token",
        value=new_refresh_token,
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=7 * 24 * 60 * 60 # 7 days
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

@router.post("/logout")
async def logout(response: Response):
    """
    Logout by clearing the refresh token cookie.
    """
    response.delete_cookie(key="refresh_token")
    return {"message": "Successfully logged out"}

@router.get("/me", response_model=UserRead)
async def read_users_me(current_user: User = Depends(get_current_user)):
    """
    Get current user.
    """
    return current_user

@router.post("/forgot-password", status_code=status.HTTP_200_OK)
async def forgot_password(data: ForgotPassword, db: AsyncSession = Depends(get_db)):
    """
    Initiate password reset flow by sending OTP to email.
    """
    auth_service = AuthService(db)
    await auth_service.initiate_password_reset(data.email)
    return {"message": "If that email exists in our system, a password reset OTP has been sent."}

@router.post("/reset-password", status_code=status.HTTP_200_OK)
async def reset_password(data: ResetPassword, db: AsyncSession = Depends(get_db)):
    """
    Reset user password using OTP.
    """
    auth_service = AuthService(db)
    await auth_service.reset_password(data.email, data.otp_code, data.new_password)
    return {"message": "Password successfully reset"}
