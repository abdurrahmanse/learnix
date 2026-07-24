"use client";

import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CourseForm } from "@/features/courses/components/CourseForm";
import { CourseFormValues } from "@/lib/validations/course";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function NewCoursePage() {
  const router = useRouter();

  const handleSubmit = async (data: CourseFormValues) => {
    // TODO: Connect to actual API in Phase 4.6
    // TODO: Connect to backend API
    toast.success("Course created successfully!");
    router.push("/admin/courses");
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
          <CourseForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
}
