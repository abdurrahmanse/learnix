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

    class Config:
        from_attributes = True
