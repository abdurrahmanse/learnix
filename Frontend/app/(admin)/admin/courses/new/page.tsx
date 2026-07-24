"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { CourseForm } from "@/features/courses/components/CourseForm"
import { CourseCreate } from "@/features/courses/types"

export default function NewCoursePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: CourseCreate) => {
    setIsLoading(true)
    
    // Simulate network delay for loading state
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("Mock Submit Create Course:", data)
    
    toast.success("Course created successfully!")
    setIsLoading(false)
    router.push("/admin/courses")
  }

  return (
    <div className="w-full mx-auto py-10 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6">
        <Link 
          href="/admin/courses" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
      </div>
      
      <CourseForm onSubmitAction={handleSubmit} isLoading={isLoading} />
    </div>
  )
}
