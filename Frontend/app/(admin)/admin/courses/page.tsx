"use client"

import { useState } from "react"
import { CourseList } from "@/features/courses/components/CourseList"
import { Course } from "@/features/courses/types"

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to React",
    slug: "intro-to-react",
    price: 49.99,
    level: "beginner",
    status: "published",
    instructor_id: "inst-1",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Advanced Next.js Patterns",
    slug: "advanced-nextjs",
    price: 99.99,
    level: "advanced",
    status: "draft",
    instructor_id: "inst-1",
    created_at: "2023-02-01T00:00:00Z",
    updated_at: "2023-02-01T00:00:00Z",
  }
]

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses)

  const handleDelete = (id: string) => {
    // Mock delete
    if (confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter(c => c.id !== id))
    }
  }

  return (
    <div className="container mx-auto py-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CourseList 
        courses={courses} 
        isLoading={false} 
        isError={false} 
        onDelete={handleDelete} 
      />
    </div>
  )
}
