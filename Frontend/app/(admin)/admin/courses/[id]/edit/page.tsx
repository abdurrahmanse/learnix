"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { CourseForm } from "@/features/courses/components/CourseForm"
import { CourseCreate, Course } from "@/features/courses/types"
import { useCourseQuery, useUpdateCourseMutation } from "@/features/courses/hooks/useCourses"

export default function EditCoursePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { data: course, isLoading: isFetching } = useCourseQuery(params.id)
  
  const { mutate: updateCourse, isPending } = useUpdateCourseMutation(params.id, () => {
    router.push("/admin/courses")
  })

  const handleSubmit = (data: CourseCreate) => {
    updateCourse(data)
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
      
      {isFetching ? (
        <div className="w-full h-96 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : course ? (
        <CourseForm initialData={course} onSubmitAction={handleSubmit} isLoading={isPending} />
      ) : (
        <div className="text-center py-10">Course not found</div>
      )}
    </div>
  )
}
