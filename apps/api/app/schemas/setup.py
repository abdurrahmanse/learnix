from pydantic import BaseModel, EmailStr, Field

class SetupRequest(BaseModel):
    database_url: str = Field(..., description="PostgreSQL Database URL")
    redis_url: str = Field(..., description="Redis Connection URL")
    admin_username: str = Field(..., description="Admin Username")
    admin_email: EmailStr = Field(..., description="Admin Email Address")
    admin_password: str = Field(..., min_length=8, description="Secure Admin Password")
    admin_full_name: str | None = None
    cloudinary_cloud_name: str | None = None
    cloudinary_api_key: str | None = None
    cloudinary_api_secret: str | None = None
    resend_api_key: str | None = None
    sentry_dsn: str | None = None

class SetupResponse(BaseModel):
    status: str
    message: str
