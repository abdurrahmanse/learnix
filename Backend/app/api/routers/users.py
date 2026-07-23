from fastapi import APIRouter, Depends, UploadFile, File, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.services.import_service import ImportService
from app.api.deps import get_current_admin
from app.db.models.user import User

router = APIRouter()

@router.post("/import")
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
