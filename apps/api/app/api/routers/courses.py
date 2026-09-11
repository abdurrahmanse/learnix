from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.api.deps import get_db, get_current_admin
from app.schemas.course import CourseCreate, CourseUpdate, CourseResponse
from app.services.course_service import CourseService
from app.db.models.user import User

router = APIRouter()

@router.get("/", response_model=List[CourseResponse])
async def list_published_courses(db: AsyncSession = Depends(get_db)):
    """
    Get a list of all published courses. Accessible publicly.
    """
    service = CourseService(db)
    return await service.get_all_published_courses()

@router.get("/admin", response_model=List[CourseResponse])
async def list_all_courses_admin(
    db: AsyncSession = Depends(get_db),
    current_admin: User = Depends(get_current_admin)
):
    """
    Get a list of all courses regardless of status. Accessible only to admins.
    """
    service = CourseService(db)
    return await service.get_all_courses_for_admin()

@router.get("/{id_or_slug}", response_model=CourseResponse)
async def get_course_details(id_or_slug: str, db: AsyncSession = Depends(get_db)):
    """
    Get details of a specific course by its ID or slug. Accessible publicly.
    """
    service = CourseService(db)
    return await service.get_course_by_id_or_slug(id_or_slug)

@router.post("/", response_model=CourseResponse, status_code=status.HTTP_201_CREATED)
async def create_course(
    course_in: CourseCreate,
    db: AsyncSession = Depends(get_db),
    current_admin: User = Depends(get_current_admin)
):
    """
    Create a new course. Accessible only to admins (instructors).
    """
    service = CourseService(db)
    return await service.create_course(course_in, instructor_id=current_admin.id)

@router.put("/{course_id}", response_model=CourseResponse)
async def update_course(
    course_id: str,
    course_in: CourseUpdate,
    db: AsyncSession = Depends(get_db),
    current_admin: User = Depends(get_current_admin)
):
    """
    Update an existing course. Accessible only to admins.
    """
    service = CourseService(db)
    return await service.update_course(course_id, course_in)

@router.delete("/{course_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_course(
    course_id: str,
    db: AsyncSession = Depends(get_db),
    current_admin: User = Depends(get_current_admin)
):
    """
    Delete a course. Accessible only to admins.
    """
    service = CourseService(db)
    await service.delete_course(course_id)
