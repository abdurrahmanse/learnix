"use client";

import { Button, Heading, Text } from "@learnix/ui";
import { Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export function CourseNotFound() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center py-32 text-center">
      <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
        <Shield className="w-10 h-10 text-destructive" />
      </div>
      <Heading className="text-3xl font-bold mb-4" level={2}>Course Not Found</Heading>
      <Text className="text-muted-foreground mb-8 max-w-md">
        The course you&apos;re looking for doesn&apos;t exist or has been removed from the platform.
      </Text>
      <Button onClick={() => router.push("/courses")} className="rounded-full px-8 h-12">
        Browse All Courses
      </Button>
    </div>
  );
}
