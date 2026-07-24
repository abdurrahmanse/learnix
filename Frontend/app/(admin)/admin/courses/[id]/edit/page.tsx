"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CourseForm } from "@/features/courses/components/CourseForm"
import { CourseCreate, Course } from "@/features/courses/types"

const mockCourse: Course = {
  id: "1",
  title: "Introduction to React",
  slug: "intro-to-react",
  description: "Learn the basics of React and Next.js.",
  short_summary: "A quick introduction to frontend frameworks.",
  thumbnail_url: "https://example.com/thumbnail.png",
  price: 49.99,
  level: "beginner",
  status: "published",
  instructor_id: "inst-1",
  created_at: "2023-01-01T00:00:00Z",
  updated_at: "2023-01-01T00:00:00Z",
}

export default function EditCoursePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  // Mock fetching data using the ID from params
  // In a real app, this would use a query hook

  const handleSubmit = (data: CourseCreate) => {
    console.log("Mock Submit Edit Course:", params.id, data)
    alert("Course updated (Mock)")
    router.push("/admin/courses")
  }

  return (
    <div className="container mx-auto py-10 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6">
        <Link 
          href="/admin/courses" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
      </div>
      
      <CourseForm initialData={mockCourse} onSubmitAction={handleSubmit} isLoading={false} />
    </div>
  )
}
