"use client";

import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CourseForm } from "@/features/courses/components/CourseForm";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Course } from "@/types/course";

// Mock Data for Phase 4.4
const MOCK_COURSE: Course = {
  id: "1",
  title: "Advanced React Masterclass",
  slug: "advanced-react-masterclass",
  short_summary: "Learn advanced React concepts like Server Components.",
  description: "## Advanced React\n\nThis is a long markdown description.",
  thumbnail_url: "https://example.com/thumbnail.png",
  price: 99.99,
  level: "advanced",
  status: "published",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export default function EditCoursePage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleSubmit = async () => {
    // TODO: Connect to actual API in Phase 4.6
    // TODO: Connect to backend API
    toast.success("Course updated successfully!");
    router.push("/admin/courses");
  };

  return (
    <div className="space-y-6 fade-in-up">
      <AdminPageHeader 
        title="Edit Course" 
        description={`Editing course ID: ${params.id}`}
        breadcrumbs={[
          { title: "Courses", href: "/admin/courses" },
          { title: "Edit" }
        ]}
      />

      <Card className="border-border/50 shadow-sm bg-background/60 backdrop-blur-xl">
        <CardContent className="pt-6">
          <CourseForm initialData={MOCK_COURSE} onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
}
