"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { CourseForm } from "@/features/courses/components/CourseForm"
import { CourseCreate } from "@/features/courses/types"
import { useCreateCourseMutation } from "@/features/courses/hooks/useCourses"

export default function NewCoursePage() {
  const router = useRouter()
  const { mutate: createCourse, isPending } = useCreateCourseMutation(() => {
    router.push("/admin/courses")
  })

  const handleSubmit = (data: CourseCreate) => {
    createCourse(data)
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
      
      <CourseForm onSubmitAction={handleSubmit} isLoading={isPending} />
    </div>
  )
}
