"use client";

import { AdminPageHeader } from "@/features/core/components/AdminPageHeader";
import { CourseForm } from "@/features/courses/components/CourseForm";
import { Card, CardContent } from "@learnix/ui";
import { useRouter } from "next/navigation";
import { useCreateCourseMutation } from "@/features/courses/hooks/useCourses";
import { type CourseFormValues } from "@learnix/utils";

export default function NewCoursePage() {
  const router = useRouter();

  const { mutate: createCourse, isPending } = useCreateCourseMutation(() => {
    router.push("/admin/courses");
  });

  const handleSubmit = (data: CourseFormValues) => {
    createCourse(data);
  };

  return (
    <div className="space-y-6 fade-in-up">
      <AdminPageHeader 
        title="Create Course" 
        description="Add a new course to your platform."
        breadcrumbs={[
          { title: "Courses", href: "/admin/courses" },
          { title: "New" }
        ]}
      />

      <Card className="border-border/50 shadow-sm bg-background/60 backdrop-blur-xl">
        <CardContent className="pt-6">
          <CourseForm onSubmit={handleSubmit} isSubmitting={isPending} />
        </CardContent>
      </Card>
    </div>
  );
}
