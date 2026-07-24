import uuid
from sqlalchemy import Column, String, DateTime, Text, Numeric, ForeignKey, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import enum
from app.db.base import Base

class CourseLevel(str, enum.Enum):
    beginner = "beginner"
    intermediate = "intermediate"
    advanced = "advanced"

class CourseStatus(str, enum.Enum):
    draft = "draft"
    published = "published"
    archived = "archived"

class Course(Base):
    __tablename__ = "courses"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    title = Column(String(255), index=True, nullable=False)
    slug = Column(String(255), unique=True, index=True, nullable=False)
    description = Column(Text, nullable=True)
    short_summary = Column(String(500), nullable=True)
    thumbnail_url = Column(Text, nullable=True)
    price = Column(Numeric(10, 2), default=0.00, nullable=False)
    level = Column(Enum(CourseLevel), default=CourseLevel.beginner, nullable=False)
    status = Column(Enum(CourseStatus), default=CourseStatus.draft, nullable=False)
    
    instructor_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    
    published_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationship to User (Instructor)
    instructor = relationship("User", backref="courses")
