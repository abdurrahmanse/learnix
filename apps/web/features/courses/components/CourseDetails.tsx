"use client";

import { useState } from "react";
import { Link } from "@learnix/ui";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useCourseQuery } from "../hooks/useCoursesQuery";
import { CourseHero } from "./CourseHero";
import { CourseStats } from "./CourseStats";
import { CourseDescription } from "./CourseDescription";
import { CourseEnrollCard } from "./CourseEnrollCard";
import { CourseDetailsSkeleton } from "./CourseDetailsSkeleton";
import { CourseNotFound } from "./CourseNotFound";

interface CourseDetailsProps {
  slug: string;
}

export function CourseDetails({ slug }: CourseDetailsProps) {
  const { data: course, isLoading, isError } = useCourseQuery(slug);
  const [isEnrolling, setIsEnrolling] = useState(false);

  const handleEnroll = () => {
    setIsEnrolling(true);
    setTimeout(() => {
      toast.success("Enrollment coming soon!");
      setIsEnrolling(false);
    }, 1500);
  };

  if (isLoading) return <CourseDetailsSkeleton />;
  if (isError || !course) return <CourseNotFound />;

  return (
    <div className="w-full max-w-6xl mx-auto py-8 md:py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Link
        href="/courses"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Catalog
      </Link>

      <CourseHero course={course} />

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="w-full lg:w-2/3 space-y-12">
          <CourseStats course={course} />
          <CourseDescription description={course.description} />
        </div>

        {/* Sticky Sidebar */}
        <div className="w-full lg:w-1/3">
          <CourseEnrollCard
            course={course}
            onEnroll={handleEnroll}
            isEnrolling={isEnrolling}
          />
        </div>
      </div>
    </div>
  );
}
