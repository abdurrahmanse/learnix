from typing import Optional
from pydantic import BaseModel, EmailStr, Field
import uuid
from datetime import datetime

class UserCreate(BaseModel):
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=50)
    password: str = Field(..., min_length=8)
    full_name: Optional[str] = None

class UserRead(BaseModel):
    id: uuid.UUID
    email: EmailStr
    username: str
    full_name: Optional[str] = None
    role: str
    avatar_url: Optional[str] = None
    is_active: bool
    is_verified: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None
