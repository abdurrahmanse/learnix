from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import or_
from app.db.models.course import Course, CourseStatus
from typing import List, Optional
import uuid

class CourseRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_by_id(self, course_id: str) -> Optional[Course]:
        try:
            uuid_obj = uuid.UUID(course_id)
        except ValueError:
            return None
        result = await self.db.execute(select(Course).where(Course.id == uuid_obj))
        return result.scalars().first()

    async def get_by_slug(self, slug: str) -> Optional[Course]:
        result = await self.db.execute(select(Course).where(Course.slug == slug))
        return result.scalars().first()

    async def get_all_published(self) -> List[Course]:
        result = await self.db.execute(
            select(Course).where(Course.status == CourseStatus.published).order_by(Course.created_at.desc())
        )
        return list(result.scalars().all())

    async def get_all_for_admin(self) -> List[Course]:
        result = await self.db.execute(
            select(Course).order_by(Course.created_at.desc())
        )
        return list(result.scalars().all())

    async def get_all_by_instructor(self, instructor_id: str) -> List[Course]:
        try:
            uuid_obj = uuid.UUID(instructor_id)
        except ValueError:
            return []
        result = await self.db.execute(
            select(Course).where(Course.instructor_id == uuid_obj).order_by(Course.created_at.desc())
        )
        return list(result.scalars().all())

    async def create(self, course: Course) -> Course:
        self.db.add(course)
        await self.db.commit()
        await self.db.refresh(course)
        return course

    async def update(self, course: Course, update_data: dict) -> Course:
        for key, value in update_data.items():
            setattr(course, key, value)
        await self.db.commit()
        await self.db.refresh(course)
        return course

    async def delete(self, course: Course) -> None:
        await self.db.delete(course)
        await self.db.commit()
