import Link from "next/link"
import { PlayCircle, BarChart, Clock, Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Course } from "@/types/course"

interface PublicCourseCardProps {
  course: Course
}

export function PublicCourseCard({ course }: PublicCourseCardProps) {
  return (
    <Card className="group relative w-full h-full flex flex-col bg-card/40 backdrop-blur-md border-white/5 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 overflow-hidden rounded-2xl">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Thumbnail Area */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted/30">
        {course.thumbnail_url ? (
          <img 
            src={course.thumbnail_url} 
            alt={course.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <PlayCircle className="w-12 h-12 text-muted-foreground/30" />
          </div>
        )}
        
        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-md hover:bg-background/90 text-xs font-semibold capitalize border-white/10">
            {course.level}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-5 pb-2">
        <h3 className="text-xl font-bold tracking-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
          <Link href={`/courses/${course.slug}`} className="before:absolute before:inset-0">
            {course.title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {course.short_summary || "No description provided."}
        </p>
        
        {/* Metadata Row */}
        <div className="flex items-center gap-4 mt-5 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-1.5">
            <BarChart className="w-4 h-4 text-primary/70" />
            <span className="capitalize">{course.level}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />
            <span>4.9</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-white/5 pt-4">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Price</span>
          <span className="text-xl font-bold text-foreground">
            {course.price > 0 ? `$${course.price.toFixed(2)}` : "Free"}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300">
          <PlayCircle className="w-5 h-5 ml-0.5" />
        </div>
      </CardFooter>
    </Card>
  )
}
