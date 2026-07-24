"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CourseDataTable } from "@/features/courses/components/CourseDataTable";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import Link from "next/link";
import { Course } from "@/types/course";
import { toast } from "sonner";
import { useAdminCoursesQuery, useDeleteCourseMutation } from "@/features/courses/hooks/useCourses";

export default function CoursesPage() {
  const { data: courses = [], isLoading } = useAdminCoursesQuery();
  const { mutate: deleteCourse } = useDeleteCourseMutation();

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this course?")) {
      deleteCourse(id);
    }
  };

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
        <CourseDataTable courses={courses} onDelete={handleDelete} />
      )}
    </div>
  );
}
