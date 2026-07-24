import { Edit, Trash2, MoreHorizontal, Plus } from "lucide-react"
import Link from "next/link"
import { Course } from "../types"

interface CourseListProps {
  courses: Course[]
  isLoading: boolean
  isError: boolean
  onDelete: (id: string) => void
}

export function CourseList({ courses, isLoading, isError, onDelete }: CourseListProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-64 w-full text-destructive">
        <p className="text-lg font-semibold">Failed to load courses</p>
        <p className="text-sm text-muted-foreground">Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Course Management</h2>
        <Link 
          href="/admin/courses/new" 
          className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Course
        </Link>
      </div>

      {courses.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-48 w-full border border-dashed rounded-xl border-border bg-card/30">
          <p className="text-muted-foreground">No courses found. Create your first course.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-muted/50 text-muted-foreground">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">Title</th>
                  <th scope="col" className="px-6 py-4 font-medium">Status</th>
                  <th scope="col" className="px-6 py-4 font-medium">Level</th>
                  <th scope="col" className="px-6 py-4 font-medium">Price</th>
                  <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                      {course.title}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold
                        ${course.status === 'published' ? 'bg-green-500/20 text-green-500' : 
                          course.status === 'draft' ? 'bg-yellow-500/20 text-yellow-500' : 
                          'bg-gray-500/20 text-gray-500'}`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 capitalize">{course.level}</td>
                    <td className="px-6 py-4">${course.price}</td>
                    <td className="px-6 py-4 text-right flex justify-end items-center gap-3">
                      <Link 
                        href={`/admin/courses/${course.id}/edit`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button 
                        onClick={() => onDelete(course.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
