from pydantic import BaseModel, EmailStr, Field
from uuid import UUID

class UserBase(BaseModel):
    email: EmailStr
    username: str
    full_name: str | None = None

class UserCreate(UserBase):
    password: str = Field(..., min_length=8, description="Password must be at least 8 characters long")

class UserRead(UserBase):
    id: UUID
    role: str
    is_active: bool
    is_verified: bool
    avatar_url: str | None = None
    avatar_public_id: str | None = None
    bio: str | None = None
    location: str | None = None
    phone_number: str | None = None

    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    full_name: str | None = None
    avatar_url: str | None = None
    avatar_public_id: str | None = None
    bio: str | None = None
    location: str | None = None
    phone_number: str | None = None

class UserPasswordUpdate(BaseModel):
    current_password: str
    new_password: str = Field(..., min_length=8, description="Password must be at least 8 characters long")

