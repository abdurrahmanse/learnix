"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@learnix/ui";
import { Course } from "@learnix/types";
import { useRouter } from "next/navigation";
import { courseFormSchema, CourseFormValues } from "@learnix/utils";
import { CourseBasicInfoSection } from "./CourseBasicInfoSection";
import { CourseSettingsSection } from "./CourseSettingsSection";
import { CourseThumbnailSection } from "./CourseThumbnailSection";
import { CourseFormActions } from "./CourseFormActions";

interface CourseFormProps {
  initialData?: Course;
  isSubmitting?: boolean;
  onSubmit: (data: CourseFormValues) => void;
}

export function CourseForm({ initialData, isSubmitting = false, onSubmit }: CourseFormProps) {
  const router = useRouter();

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: initialData
      ? {
          title: initialData.title,
          short_summary: initialData.short_summary || "",
          description: initialData.description || "",
          thumbnail_url: initialData.thumbnail_url || "",
          price: initialData.price,
          level: initialData.level,
          status: initialData.status,
        }
      : {
          title: "",
          short_summary: "",
          description: "",
          thumbnail_url: "",
          thumbnail_public_id: "",
          price: 0.0,
          level: "beginner",
          status: "draft",
        },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column — content */}
          <CourseBasicInfoSection control={form.control} />

          {/* Right column — settings + thumbnail */}
          <div className="space-y-6">
            <CourseSettingsSection control={form.control} />
            <CourseThumbnailSection control={form.control} setValue={form.setValue} />
          </div>
        </div>

        <CourseFormActions
          isSubmitting={isSubmitting}
          isEditMode={!!initialData}
          onCancel={() => router.push("/admin/courses")}
        />
      </form>
    </Form>
  );
}
