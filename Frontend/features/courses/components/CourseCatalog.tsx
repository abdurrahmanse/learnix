"use client"

import { useState, useEffect } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Course } from "../types"
import { PublicCourseCard } from "./PublicCourseCard"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const MOCK_COURSES: Course[] = [
  {
    id: "1",
    title: "Mastering Next.js 14 with App Router",
    slug: "mastering-nextjs-14",
    description: "Learn how to build full-stack applications using Next.js 14 App Router.",
    short_summary: "Comprehensive guide to Next.js 14, React Server Components, and advanced data fetching.",
    thumbnail_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    price: 99.99,
    level: "intermediate",
    status: "published",
    instructor_id: "inst-1",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Python for Data Science Bootcamp",
    slug: "python-data-science",
    description: "Go from zero to hero in Python and Data Science.",
    short_summary: "Learn Python, Pandas, NumPy, and Machine Learning from scratch.",
    thumbnail_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    price: 149.99,
    level: "beginner",
    status: "published",
    instructor_id: "inst-2",
    created_at: "2023-02-01T00:00:00Z",
    updated_at: "2023-02-01T00:00:00Z",
  },
  {
    id: "3",
    title: "Advanced System Design Interview",
    slug: "advanced-system-design",
    description: "Prepare for FAANG system design interviews.",
    short_summary: "Crack the hardest system design interviews with real-world architectural patterns.",
    thumbnail_url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    price: 199.99,
    level: "advanced",
    status: "published",
    instructor_id: "inst-1",
    created_at: "2023-03-01T00:00:00Z",
    updated_at: "2023-03-01T00:00:00Z",
  },
]

export function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate API Fetch
    const fetchCourses = async () => {
      try {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setCourses(MOCK_COURSES)
        setIsError(false)
      } catch (err) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchCourses()
  }, [])

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.short_summary?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full space-y-12">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-card/30 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
        <div className="space-y-1 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Explore Courses</h1>
          <p className="text-muted-foreground">Discover new skills and level up your career.</p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 flex-1 justify-end">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full h-12 bg-background/50 border-white/10"
            />
          </div>
          <Button variant="outline" className="rounded-full h-12 px-6 border-white/10 hidden sm:flex">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* States */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-[400px] rounded-2xl bg-muted/20 animate-pulse border border-white/5" />
          ))}
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
            <span className="text-destructive font-bold text-2xl">!</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Failed to load courses</h3>
          <p className="text-muted-foreground mb-6">We encountered an error while fetching the catalog.</p>
          <Button onClick={() => window.location.reload()} variant="outline" className="rounded-full">
            Try Again
          </Button>
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Search className="w-16 h-16 text-muted-foreground/30 mb-4" />
          <h3 className="text-xl font-bold mb-2">No courses found</h3>
          <p className="text-muted-foreground">Try adjusting your search query.</p>
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
