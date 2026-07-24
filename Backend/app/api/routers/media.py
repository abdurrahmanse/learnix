import time
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from app.api.deps import get_current_user
from app.db.models.user import User
from app.core.config import settings

import cloudinary
import cloudinary.utils

router = APIRouter()

# Configure Cloudinary globally
if settings.CLOUDINARY_CLOUD_NAME and settings.CLOUDINARY_API_KEY:
    cloudinary.config(
        cloud_name=settings.CLOUDINARY_CLOUD_NAME,
        api_key=settings.CLOUDINARY_API_KEY,
        api_secret=settings.CLOUDINARY_API_SECRET,
        secure=True
    )

class SignatureResponse(BaseModel):
    timestamp: int
    signature: str
    api_key: str
    cloud_name: str
    folder: str

@router.get("/signature", response_model=SignatureResponse)
async def get_upload_signature(
    folder: str = "learnix_uploads",
    current_user: User = Depends(get_current_user)
):
    """
    Generate a signature for secure direct uploads to Cloudinary from the browser.
    """
    if not settings.CLOUDINARY_API_KEY or not settings.CLOUDINARY_API_SECRET:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Cloudinary is not configured on the server."
        )

    timestamp = int(time.time())
    
    # Parameters to sign
    params_to_sign = {
        "timestamp": timestamp,
        "folder": folder
    }

    # Generate signature using api_secret
    signature = cloudinary.utils.api_sign_request(
        params_to_sign,
        settings.CLOUDINARY_API_SECRET
    )

    return SignatureResponse(
        timestamp=timestamp,
        signature=signature,
        api_key=settings.CLOUDINARY_API_KEY,
        cloud_name=settings.CLOUDINARY_CLOUD_NAME or "",
        folder=folder
    )
