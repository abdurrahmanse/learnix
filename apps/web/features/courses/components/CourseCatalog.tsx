"use client"

import { Search, SlidersHorizontal } from "lucide-react"
import { Course } from "@learnix/types"
import { PublicCourseCard } from "./PublicCourseCard"
import { Input, Heading, Text } from "@learnix/ui"
import { Button } from "@learnix/ui"
import { useCoursesQuery } from "../hooks/useCourses"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useTransition } from "react"

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
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-card/30 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
        <div className="space-y-1 w-full md:w-1/2">
          <Heading className="text-3xl md:text-4xl font-extrabold tracking-tight" level={1}>Explore Courses</Heading>
          <Text className="text-muted-foreground">Discover new skills and level up your career.</Text>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 flex-1 justify-end">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              value={currentQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 rounded-full h-12 bg-background/50 border-white/10"
            />
            {isPending && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              </div>
            )}
          </div>
          <Button variant="outline" className="rounded-full h-12 px-6 border-white/10 hidden sm:flex">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* States */}
      {isError ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
            <span className="text-destructive font-bold text-2xl">!</span>
          </div>
          <Heading className="text-xl font-bold mb-2" level={3}>Failed to load courses</Heading>
          <Text className="text-muted-foreground mb-6">We encountered an error while fetching the catalog.</Text>
          <Button onClick={() => refetch()} variant="outline" className="rounded-full">
            Try Again
          </Button>
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Search className="w-16 h-16 text-muted-foreground/30 mb-4" />
          <Heading className="text-xl font-bold mb-2" level={3}>No courses found</Heading>
          <Text className="text-muted-foreground">Try adjusting your search query.</Text>
        </div>
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
