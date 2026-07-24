from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status
from app.repositories.course_repository import CourseRepository
from app.schemas.course import CourseCreate, CourseUpdate
from app.db.models.course import Course, CourseStatus
import re
from datetime import datetime, timezone
import uuid
from typing import List

class CourseService:
    def __init__(self, db: AsyncSession):
        self.repository = CourseRepository(db)

    def _generate_slug(self, title: str) -> str:
        # Convert to lowercase and replace non-alphanumeric chars with hyphens
        slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
        return slug

    async def _ensure_unique_slug(self, base_slug: str, exclude_id: str = None) -> str:
        slug = base_slug
        counter = 1
        while True:
            existing = await self.repository.get_by_slug(slug)
            if not existing or (exclude_id and str(existing.id) == exclude_id):
                break
            slug = f"{base_slug}-{counter}"
            counter += 1
        return slug

    async def create_course(self, course_in: CourseCreate, instructor_id: uuid.UUID) -> Course:
        base_slug = self._generate_slug(course_in.title)
        unique_slug = await self._ensure_unique_slug(base_slug)

        course = Course(
            title=course_in.title,
            slug=unique_slug,
            description=course_in.description,
            short_summary=course_in.short_summary,
            thumbnail_url=course_in.thumbnail_url,
            price=course_in.price,
            level=course_in.level,
            status=course_in.status,
            instructor_id=instructor_id
        )
        if course.status == CourseStatus.published:
            course.published_at = datetime.now(timezone.utc)

        return await self.repository.create(course)

    async def get_all_published_courses(self) -> List[Course]:
        return await self.repository.get_all_published()

    async def get_all_courses_for_admin(self) -> List[Course]:
        return await self.repository.get_all_for_admin()

    async def get_course_by_id_or_slug(self, identifier: str) -> Course:
        course = await self.repository.get_by_id(identifier)
        if not course:
            course = await self.repository.get_by_slug(identifier)
        if not course:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")
        return course

    async def update_course(self, course_id: str, course_in: CourseUpdate) -> Course:
        course = await self.repository.get_by_id(course_id)
        if not course:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")

        update_data = course_in.model_dump(exclude_unset=True)
        
        # If title is updated, we might need a new slug
        if "title" in update_data and update_data["title"] != course.title:
            base_slug = self._generate_slug(update_data["title"])
            unique_slug = await self._ensure_unique_slug(base_slug, exclude_id=course_id)
            update_data["slug"] = unique_slug

        # If status changes to published, update published_at
        if "status" in update_data:
            if update_data["status"] == CourseStatus.published and course.status != CourseStatus.published:
                update_data["published_at"] = datetime.now(timezone.utc)
            elif update_data["status"] != CourseStatus.published:
                update_data["published_at"] = None

        return await self.repository.update(course, update_data)

    async def delete_course(self, course_id: str) -> None:
        course = await self.repository.get_by_id(course_id)
        if not course:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")
        
        await self.repository.delete(course)
