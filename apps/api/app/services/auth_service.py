from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.repositories.user_repository import UserRepository
from fastapi import HTTPException, status
from app.db.models.user import User
from app.schemas.user import UserCreate
from app.core.security import get_password_hash, verify_password, create_access_token, create_refresh_token
from app.services.otp_service import OTPService

class AuthService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.otp_service = OTPService(db)
        self.user_repo = UserRepository(db)

    async def get_user_by_email(self, email: str) -> User | None:
        return await self.user_repo.get_by_email(email)

    async def get_user_by_username(self, username: str) -> User | None:
        return await self.user_repo.get_by_username(username)

    async def register_user(self, user_in: UserCreate) -> User:
        if await self.get_user_by_email(user_in.email):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
        if await self.get_user_by_username(user_in.username):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already taken")

        new_user = User(
            email=user_in.email,
            username=user_in.username,
            full_name=user_in.full_name,
            hashed_password=get_password_hash(user_in.password),
            is_active=False,
            is_verified=False
        )
        new_user = await self.user_repo.create(new_user)

        # Generate and send OTP
        otp = await self.otp_service.create_otp(new_user, "registration")
        await self.otp_service.send_otp_email(new_user, otp.otp_code, "registration")

        return new_user

    async def verify_registration(self, email: str, otp_code: str) -> bool:
        user = await self.get_user_by_email(email)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
        if user.is_verified:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User already verified")

        is_valid = await self.otp_service.verify_otp(user, "registration", otp_code)
        if not is_valid:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired OTP")

        user.is_active = True
        user.is_verified = True
        await self.db.commit()
        return True

    async def authenticate_user(self, identifier: str, password: str) -> dict:
        user = await self.get_user_by_email(identifier)
        if not user:
            user = await self.get_user_by_username(identifier)
            
        if not user or not verify_password(password, user.hashed_password):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
        if not user.is_active or not user.is_verified:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is not active or not verified")

        return {
            "access_token": create_access_token(user.id, user.role),
            "refresh_token": create_refresh_token(user.id, user.role),
            "user": user
        }

    async def initiate_password_reset(self, email: str):
        user = await self.get_user_by_email(email)
        if not user:
            return  # Fail silently to prevent user enumeration
        
        otp = await self.otp_service.create_otp(user, "password_reset")
        await self.otp_service.send_otp_email(user, otp.otp_code, "password_reset")

    async def reset_password(self, email: str, otp_code: str, new_password: str):
        user = await self.get_user_by_email(email)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

        is_valid = await self.otp_service.verify_otp(user, "password_reset", otp_code)
        if not is_valid:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired OTP")

        user.hashed_password = get_password_hash(new_password)
        await self.db.commit()
