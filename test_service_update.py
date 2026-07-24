import asyncio
import sys
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from app.db.base import Base
from app.db.models.course import Course
from app.services.course_service import CourseService
from app.schemas.course import CourseUpdate
from sqlalchemy.future import select

# We need the DATABASE_URL from config or env
# Let's import it
from app.core.config import settings

engine = create_async_engine(settings.DATABASE_URL, echo=False)
async_session = async_sessionmaker(engine, expire_on_commit=False)

async def test_update():
    async with async_session() as session:
        result = await session.execute(select(Course).limit(1))
        course = result.scalars().first()
        if not course:
            print("No course found!")
            return
        
        print(f"Found course to update: {course.id}")
        
        service = CourseService(session)
        # Simulate data coming from frontend
        update_data = CourseUpdate(
            title="Updated Title 123",
            price=19.99
        )
        
        try:
            updated = await service.update_course(str(course.id), update_data)
            print(f"Update success! New title: {updated.title}, slug: {updated.slug}")
        except Exception as e:
            print(f"Error during update: {e}")
            import traceback
            traceback.print_exc()

asyncio.run(test_update())
