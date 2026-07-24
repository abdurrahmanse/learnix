"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, PlayCircle, Star, BarChart, CheckCircle2, Shield, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

import { Course } from "../types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const MOCK_COURSE: Course = {
  id: "1",
  title: "Mastering Next.js 14 with App Router",
  slug: "mastering-nextjs-14",
  description: `## About this course\n\nThis course is the ultimate guide to building modern web applications using Next.js 14. You will learn about React Server Components, Server Actions, parallel routing, intercepting routes, and more.\n\n### What you'll learn\n- Deep dive into the App Router\n- Mastering Server Components vs Client Components\n- Data fetching patterns\n- Authentication and Authorization\n- Deployment strategies`,
  short_summary: "Comprehensive guide to Next.js 14, React Server Components, and advanced data fetching.",
  thumbnail_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  price: 99.99,
  level: "intermediate",
  status: "published",
  instructor_id: "inst-1",
  created_at: "2023-01-01T00:00:00Z",
  updated_at: "2023-01-01T00:00:00Z",
}

export function CourseDetails({ slug }: { slug: string }) {
  const router = useRouter()
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isEnrolling, setIsEnrolling] = useState(false)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true)
        // Simulate API fetch delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock 404 condition
        if (slug === "not-found-mock") {
          setIsError(true)
          setCourse(null)
          return
        }
        
        setCourse({ ...MOCK_COURSE, slug })
        setIsError(false)
      } catch (err) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchCourse()
  }, [slug])

  const handleEnroll = async () => {
    setIsEnrolling(true)
    // Simulate transaction delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    toast.success("Successfully enrolled in the course!")
    setIsEnrolling(false)
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-5xl mx-auto py-12 animate-pulse">
        <div className="w-24 h-6 bg-muted rounded mb-8" />
        <div className="w-full aspect-video md:aspect-[21/9] bg-muted/30 rounded-3xl mb-12" />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3 space-y-6">
            <div className="w-3/4 h-12 bg-muted rounded" />
            <div className="w-full h-4 bg-muted rounded" />
            <div className="w-5/6 h-4 bg-muted rounded" />
          </div>
          <div className="w-full md:w-1/3">
            <div className="w-full h-64 bg-muted/20 rounded-2xl" />
          </div>
        </div>
      </div>
    )
  }

  if (isError || !course) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-32 text-center">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <Shield className="w-10 h-10 text-destructive" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">The course you're looking for doesn't exist or has been removed from the platform.</p>
        <Button onClick={() => router.push("/courses")} className="rounded-full px-8 h-12">
          Browse All Courses
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-8 md:py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Link 
        href="/courses" 
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Catalog
      </Link>

      {/* Hero Section */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 group">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {course.thumbnail_url ? (
          <img 
            src={course.thumbnail_url} 
            alt={course.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-3 py-1 text-xs md:text-sm">
              Featured
            </Badge>
            <Badge variant="outline" className="text-white border-white/20 backdrop-blur-md px-3 py-1 capitalize text-xs md:text-sm">
              {course.level}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 max-w-4xl">
            {course.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl font-light">
            {course.short_summary}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="w-full lg:w-2/3 space-y-12">
          
          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-6 md:gap-12 py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500/20" />
              <div>
                <p className="text-xl font-bold">4.9</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-500" />
              <div>
                <p className="text-xl font-bold">2,451</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Students</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BarChart className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-xl font-bold capitalize">{course.level}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Difficulty</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-500" />
              <div>
                <p className="text-xl font-bold">Updated</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Oct 2024</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {/* Simple Markdown Renderer Mock */}
            {course.description?.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-3xl font-bold mt-12 mb-6">{line.replace('## ', '')}</h2>
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace('### ', '')}</h3>
              }
              if (line.startsWith('- ')) {
                return (
                  <div key={i} className="flex items-start gap-3 my-2">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{line.replace('- ', '')}</span>
                  </div>
                )
              }
              if (line.trim() === '') return <br key={i} />
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{line}</p>
            })}
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-24">
            <Card className="bg-card/40 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden rounded-3xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">Enrollment Fee</p>
                  <p className="text-5xl font-extrabold">
                    {course.price > 0 ? `$${course.price.toFixed(2)}` : "Free"}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2"><PlayCircle className="w-4 h-4"/> 15 Hours of video</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Certificate of completion</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2"><Shield className="w-4 h-4"/> Full lifetime access</span>
                  </div>
                </div>

                <Button 
                  onClick={handleEnroll}
                  disabled={isEnrolling}
                  className="w-full h-14 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all hover:-translate-y-1"
                >
                  {isEnrolling ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    "Enroll Now"
                  )}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground mt-4">
                  30-Day Money-Back Guarantee
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
