"use client";

import { Heading, Text } from "@learnix/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CoursesError({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
        <span className="text-2xl">⚠️</span>
      </div>
      <Heading className="text-2xl font-bold mb-3" level={2}>Failed to load courses</Heading>
      <Text className="text-muted-foreground mb-6 max-w-sm">{error.message || "An unexpected error occurred."}</Text>
      <button
        onClick={reset}
        className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
