from pydantic import BaseModel, Field
from typing import Optional
from uuid import UUID
from datetime import datetime
from app.db.models.course import CourseLevel, CourseStatus

class CourseBase(BaseModel):
    title: str = Field(..., max_length=255, description="Title of the course")
    description: Optional[str] = Field(None, description="Detailed markdown/text description")
    short_summary: Optional[str] = Field(None, max_length=500, description="Short excerpt for course cards")
    thumbnail_url: Optional[str] = Field(None, description="URL to the uploaded thumbnail")
    price: float = Field(default=0.00, ge=0.0, description="Course price")
    level: CourseLevel = Field(default=CourseLevel.beginner, description="Course difficulty level")
    status: CourseStatus = Field(default=CourseStatus.draft, description="Current status of the course")

class CourseCreate(CourseBase):
    pass

class CourseUpdate(BaseModel):
    title: Optional[str] = Field(None, max_length=255)
    description: Optional[str] = None
    short_summary: Optional[str] = Field(None, max_length=500)
    thumbnail_url: Optional[str] = None
    price: Optional[float] = Field(None, ge=0.0)
    level: Optional[CourseLevel] = None
    status: Optional[CourseStatus] = None

class CourseResponse(CourseBase):
    id: UUID
    slug: str
    instructor_id: Optional[UUID]
    published_at: Optional[datetime]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
