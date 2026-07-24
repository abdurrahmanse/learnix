import { CourseDetails } from "@/features/courses/components/CourseDetails"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real app, you would fetch the course by slug to dynamically generate metadata
  return {
    title: `Course: ${params.slug} | Learnix`,
    description: `Details for course ${params.slug}`,
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full">
      <CourseDetails slug={params.slug} />
    </div>
  )
}
