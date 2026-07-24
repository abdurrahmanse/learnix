import { CourseCatalog } from "@/features/courses/components/CourseCatalog"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Explore Courses | Learnix",
  description: "Browse our comprehensive catalog of programming and design courses.",
}

export default function CoursesPage() {
  return (
    <div className="w-full py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CourseCatalog />
    </div>
  )
}
