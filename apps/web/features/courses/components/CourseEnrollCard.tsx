"use client";

import { Card, CardContent, Text } from "@learnix/ui";
import { Button } from "@learnix/ui";
import { PlayCircle, CheckCircle2, Shield } from "lucide-react";
import { type Course } from "@learnix/types";

interface CourseEnrollCardProps {
  course: Course;
  onEnroll: () => void;
  isEnrolling: boolean;
}

export function CourseEnrollCard({ course, onEnroll, isEnrolling }: CourseEnrollCardProps) {
  return (
    <div className="sticky top-24">
      <Card className="bg-card/40 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden rounded-3xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <Text className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">
              Enrollment Fee
            </Text>
            <Text className="text-5xl font-extrabold">
              {course.price > 0 ? `$${course.price.toFixed(2)}` : "Free"}
            </Text>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-2">
                <PlayCircle className="w-4 h-4" /> 15 Hours of video
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Certificate of completion
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4" /> Full lifetime access
              </span>
            </div>
          </div>

          <Button
            onClick={onEnroll}
            disabled={isEnrolling}
            className="w-full h-14 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all hover:-translate-y-1"
          >
            {isEnrolling ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </div>
            ) : (
              "Enroll Now"
            )}
          </Button>

          <Text className="text-center text-xs text-muted-foreground mt-4">
            30-Day Money-Back Guarantee
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}
