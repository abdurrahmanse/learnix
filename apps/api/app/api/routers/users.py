from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.services.import_service import ImportService
from app.api.deps import get_current_admin, get_current_user
from app.db.models.user import User
from app.schemas.user import UserRead, UserUpdate, UserPasswordUpdate, ImportResponse

from app.services.profile_service import ProfileService

from typing import List

router = APIRouter()

@router.get("/", response_model=List[UserRead])
async def list_all_users(
    db: AsyncSession = Depends(get_db),
    current_admin: User = Depends(get_current_admin)
):
    """
    Get all users. Requires admin privileges.
    """
    from app.repositories.user_repository import UserRepository
    repo = UserRepository(db)
    return await repo.get_all()

@router.get("/me", response_model=UserRead)
async def get_my_profile(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Get current user's profile.
    """
    profile_service = ProfileService(db)
    return await profile_service.get_profile(current_user)

@router.patch("/me", response_model=UserRead)
async def update_my_profile(
    update_data: UserUpdate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Update current user's profile.
    """
    profile_service = ProfileService(db)
    return await profile_service.update_profile(current_user, update_data)

@router.post("/me/avatar", response_model=UserRead)
async def upload_avatar(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Upload and update user's avatar.
    """
    profile_service = ProfileService(db)
    return await profile_service.upload_avatar(current_user, file)

@router.post("/me/password", response_model=UserRead)
async def update_my_password(
    password_data: UserPasswordUpdate,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """
    Update current user's password.
    """
    profile_service = ProfileService(db)
    return await profile_service.update_password(current_user, password_data)

@router.post("/import", response_model=ImportResponse)
async def import_users(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_admin: User = Depends(get_current_admin)
):
    """
    Bulk import users from a CSV file. Requires admin privileges.
    Expected CSV headers: email, username, full_name, password, role
    """
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Only CSV files are supported.")
        
    try:
        content = await file.read()
        import_service = ImportService(db)
        summary = await import_service.import_users_from_csv(content)
        return summary
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process CSV: {str(e)}")
