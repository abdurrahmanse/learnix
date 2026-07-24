"use client";

import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CourseForm } from "@/features/courses/components/CourseForm";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter, useParams } from "next/navigation";
import { useCourseQuery, useUpdateCourseMutation } from "@/features/courses/hooks/useCourses";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const { data: course, isLoading, isError, error, refetch } = useCourseQuery(id);
  const { mutate: updateCourse, isPending } = useUpdateCourseMutation(id, () => {
    router.push("/admin/courses");
  });

  const handleSubmit = (data: any) => {
    updateCourse(data);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <p className="text-muted-foreground font-medium">Failed to load course.</p>
        <p className="text-sm text-muted-foreground">Course ID: {id}</p>
        <Button variant="outline" onClick={() => refetch()}>Try Again</Button>
        <Button variant="ghost" onClick={() => router.push("/admin/courses")}>Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in-up">
      <AdminPageHeader 
        title="Edit Course" 
        description={`Editing course: ${course.title}`}
        breadcrumbs={[
          { title: "Courses", href: "/admin/courses" },
          { title: "Edit" }
        ]}
      />

      <Card className="border-border/50 shadow-sm bg-background/60 backdrop-blur-xl">
        <CardContent className="pt-6">
          <CourseForm initialData={course} onSubmit={handleSubmit} isSubmitting={isPending} />
        </CardContent>
      </Card>
    </div>
  );
}
