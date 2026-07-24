"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CourseDataTable } from "@/components/courses/CourseDataTable";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import Link from "next/link";
import { Course } from "@/types/course";
import { courseService } from "@/lib/api/courses";
import { toast } from "sonner";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.listAllCoursesAdmin();
        setCourses(data);
      } catch (error) {
        toast.error("Failed to fetch courses");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="space-y-6 fade-in-up">
      <div className="flex items-center justify-between">
        <AdminPageHeader 
          title="Courses" 
          description="Manage your platform's Courses here."
          breadcrumbs={[{ title: "Courses" }]}
        />
        <Button asChild className="bg-primary/90 hover:bg-primary">
          <Link href="/admin/courses/new">
            <Plus className="mr-2 h-4 w-4" /> Add Course
          </Link>
        </Button>
      </div>
      
      {isLoading ? (
        <div className="flex h-64 items-center justify-center rounded-md border border-border/50 bg-background/50 backdrop-blur-xl">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <CourseDataTable courses={courses} />
      )}
    </div>
  );
}
