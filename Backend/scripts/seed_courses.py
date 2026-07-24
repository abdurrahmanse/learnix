import asyncio
import os
import sys

# Add backend directory to Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.session import AsyncSessionLocal
from app.db.models.user import User
from app.db.models.course import CourseLevel, CourseStatus
from app.services.course_service import CourseService
from app.schemas.course import CourseCreate
from sqlalchemy.future import select

# Dummy data for 3 Data Science courses
MOCK_COURSES = [
    CourseCreate(
        title="Introduction to Data Science",
        short_summary="A beginner's guide to Data Science concepts.",
        description="Learn the basics of Data Science, understanding data pipelines, exploratory data analysis, and fundamental statistics without heavy programming.",
        thumbnail_url="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        price=0.00,
        level=CourseLevel.beginner,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Python for Data Science Masterclass",
        short_summary="Master Python, Pandas, NumPy, and Scikit-Learn.",
        description="Dive deep into Data Science and Machine Learning with Python. Learn how to clean data, visualize it, and build predictive models.",
        thumbnail_url="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        price=59.99,
        level=CourseLevel.intermediate,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Advanced Machine Learning & Deep Learning",
        short_summary="Build cutting-edge AI models with PyTorch and TensorFlow.",
        description="Master deep neural networks, computer vision, natural language processing, and model deployment in production environments.",
        thumbnail_url="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
        price=99.99,
        level=CourseLevel.advanced,
        status=CourseStatus.published
    ),
]

async def seed_courses():
    async with AsyncSessionLocal() as db:
        # Get the first admin user to act as instructor
        result = await db.execute(select(User).where(User.role == "admin"))
        instructor = result.scalars().first()
        
        if not instructor:
            print("No admin user found. Please run the init_db script first or register a user.")
            return
            
        print(f"Found instructor: {instructor.email} (ID: {instructor.id})")
        
        course_service = CourseService(db)
        
        created_count = 0
        for course_data in MOCK_COURSES:
            try:
                course = await course_service.create_course(course_in=course_data, instructor_id=instructor.id)
                print(f"✅ Created course: {course.title} (Status: {course.status.value})")
                created_count += 1
            except Exception as e:
                print(f"❌ Failed to create course '{course_data.title}': {e}")
                
        print(f"\nSuccessfully seeded {created_count} courses!")

if __name__ == "__main__":
    print("Starting course seed...")
    asyncio.run(seed_courses())
