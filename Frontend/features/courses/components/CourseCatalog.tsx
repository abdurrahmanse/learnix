"use client"

import { useState, useEffect } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Course } from "@/types/course"
import { PublicCourseCard } from "./PublicCourseCard"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCoursesQuery } from "../hooks/useCourses"
import { useCourseStore } from "@/store/courseStore"

export function CourseCatalog() {
  const { data: courses = [], isLoading, isError, refetch } = useCoursesQuery()
  const { searchQuery, setSearchQuery } = useCourseStore()

  const filteredCourses = courses.filter((course: Course) => 
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
          <Button onClick={() => refetch()} variant="outline" className="rounded-full">
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
