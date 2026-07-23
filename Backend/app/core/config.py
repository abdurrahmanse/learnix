from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Learnix"
    API_V1_STR: str = "/api/v1"
    DATABASE_URL: str
    DEBUG: bool = True
    
    SECRET_KEY: str = "supersecretkey" # TODO: change in production
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    RESEND_API_KEY: str | None = None
    EMAIL_FROM: str = "onboarding@resend.dev"

    class Config:
        env_file = ".env"

settings = Settings()
