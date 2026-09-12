"use client"

import { PublicCourseCard } from "./PublicCourseCard"
import { useCoursesQuery } from "../hooks/useCourses"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useTransition } from "react"
import { CatalogHeader } from "./catalog/CatalogHeader"
import { CatalogErrorState, CatalogEmptyState } from "./catalog/CatalogStates"
import { type Course } from "@learnix/types"

export function CourseCatalog({ initialSearchQuery = "" }: { initialSearchQuery?: string }) {
  // Using React Query; it will instantly return data from the HydrationBoundary
  const { data: courses = [], isError, refetch } = useCoursesQuery()
  
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  // State is now URL-driven instead of local state
  const currentQuery = searchParams.get("q") ?? initialSearchQuery

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set("q", value)
    } else {
      params.delete("q")
    }
    // Update the URL without a full page reload, and in a transition
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    })
  }

  const filteredCourses = courses.filter((course: Course) => 
    course.title.toLowerCase().includes(currentQuery.toLowerCase()) || 
    course.short_summary?.toLowerCase().includes(currentQuery.toLowerCase())
  )

  return (
    <div className="w-full space-y-12">
      {/* Header and Search */}
      <CatalogHeader currentQuery={currentQuery} isPending={isPending} onSearch={handleSearch} />

      {/* States */}
      {isError ? (
        <CatalogErrorState onRetry={() => refetch()} />
      ) : filteredCourses.length === 0 ? (
        <CatalogEmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${parseInt(course.id) * 100}ms` }}>
              <PublicCourseCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
