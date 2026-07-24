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

# Dummy data for 10 courses
MOCK_COURSES = [
    CourseCreate(
        title="Complete React Bootcamp",
        short_summary="Learn React from scratch to mastery.",
        description="A complete guide to React, including Hooks, Context, Redux, and Next.js.",
        thumbnail_url="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        price=49.99,
        level=CourseLevel.beginner,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Advanced Node.js Architectures",
        short_summary="Master backend development with Node.js and Microservices.",
        description="Learn how to build scalable microservices using Node.js, Express, Docker, and Kubernetes.",
        thumbnail_url="https://images.unsplash.com/photo-1627398240411-8bbeb73646f9?q=80&w=800&auto=format&fit=crop",
        price=89.99,
        level=CourseLevel.advanced,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Python Data Science Masterclass",
        short_summary="A complete guide to Pandas, NumPy, and Scikit-Learn.",
        description="Dive deep into Data Science and Machine Learning with Python.",
        thumbnail_url="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        price=59.99,
        level=CourseLevel.intermediate,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Introduction to Machine Learning",
        short_summary="Your first steps into AI and ML.",
        description="Basic concepts of Machine learning without heavy math.",
        thumbnail_url="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
        price=29.99,
        level=CourseLevel.beginner,
        status=CourseStatus.draft
    ),
    CourseCreate(
        title="Fullstack Web Development with Next.js",
        short_summary="Build modern web applications using Next.js 14.",
        description="Learn App Router, Server Actions, and Tailwind CSS.",
        thumbnail_url="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop",
        price=99.99,
        level=CourseLevel.intermediate,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Mastering TypeScript",
        short_summary="Write safer and more scalable JavaScript.",
        description="Advanced types, generics, and configuration for large TS projects.",
        thumbnail_url="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        price=39.99,
        level=CourseLevel.advanced,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="UI/UX Design for Developers",
        short_summary="Learn to design beautiful interfaces.",
        description="Color theory, typography, spacing, and Figma basics.",
        thumbnail_url="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
        price=24.99,
        level=CourseLevel.beginner,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Docker and Kubernetes for Beginners",
        short_summary="Containerize your applications easily.",
        description="Learn Docker basics and simple K8s deployments.",
        thumbnail_url="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop",
        price=45.00,
        level=CourseLevel.beginner,
        status=CourseStatus.draft
    ),
    CourseCreate(
        title="Rust Programming Masterclass",
        short_summary="Learn memory-safe systems programming.",
        description="Ownership, borrowing, lifetimes, and building real CLI tools in Rust.",
        thumbnail_url="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop",
        price=79.99,
        level=CourseLevel.advanced,
        status=CourseStatus.published
    ),
    CourseCreate(
        title="Legacy jQuery Migration",
        short_summary="Move off jQuery to modern JS.",
        description="Strategies to convert legacy codebases safely.",
        thumbnail_url="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=800&auto=format&fit=crop",
        price=19.99,
        level=CourseLevel.intermediate,
        status=CourseStatus.archived
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
