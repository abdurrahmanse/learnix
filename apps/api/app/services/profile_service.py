import os
import shutil
from fastapi import UploadFile, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserUpdate, UserPasswordUpdate
from app.core.security import verify_password, get_password_hash
from app.db.models.user import User
import uuid

UPLOAD_DIR = "uploads/avatars"

class ProfileService:
    def __init__(self, db: AsyncSession):
        self.user_repo = UserRepository(db)
        
        # Ensure upload directory exists
        os.makedirs(UPLOAD_DIR, exist_ok=True)

    async def get_profile(self, user: User) -> User:
        """
        Retrieves the user's profile.
        Future-proofed in case we need to join other tables (like preferences, statistics).
        """
        # Currently, all profile fields are on the User model itself.
        return user

    async def update_profile(self, user: User, update_data: UserUpdate) -> User:
        """
        Updates the user's basic profile information.
        """
        # Remove None values from update data
        update_dict = {k: v for k, v in update_data.model_dump(exclude_unset=True).items() if v is not None}
        
        # Prevent unique constraint violation on phone_number if needed
        # (Assuming the DB throws IntegrityError if someone else has the phone_number,
        # but ideally we should check manually if it exists)
        
        updated_user = await self.user_repo.update(user, update_dict)
        return updated_user

    async def update_password(self, user: User, password_data: UserPasswordUpdate) -> User:
        """
        Validates the current password and updates it to the new password.
        """
        if not verify_password(password_data.current_password, user.hashed_password):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Incorrect current password"
            )
        
        new_hashed_password = get_password_hash(password_data.new_password)
        updated_user = await self.user_repo.update(user, {"hashed_password": new_hashed_password})
        return updated_user

    async def upload_avatar(self, user: User, file: UploadFile) -> User:
        """
        Saves the uploaded file locally and updates the user's avatar_url.
        """
        # Basic validation
        allowed_content_types = ["image/jpeg", "image/png", "image/webp"]
        if file.content_type not in allowed_content_types:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid file type. Only JPEG, PNG, and WebP are allowed."
            )
            
        # Generate a unique filename to prevent collisions and browser caching issues
        file_extension = file.filename.split('.')[-1]
        unique_filename = f"{user.id}_{uuid.uuid4().hex[:8]}.{file_extension}"
        file_path = os.path.join(UPLOAD_DIR, unique_filename)
        
        # Save file to disk
        try:
            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Could not save file: {str(e)}"
            )
            
        # Optional: Delete old avatar if it exists (leaving this out for simplicity unless requested)
        
        # Construct the URL (Assuming the FastAPI app mounts a StaticFiles route at /uploads)
        avatar_url = f"/uploads/avatars/{unique_filename}"
        
        updated_user = await self.user_repo.update(user, {"avatar_url": avatar_url})
        return updated_user
