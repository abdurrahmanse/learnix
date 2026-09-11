"use client";

import { Button, Heading, Text } from "@learnix/ui";
import { AlertCircle } from "lucide-react";

export default function AdminUsersError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <Heading className="text-2xl font-bold mb-2" level={2}>Something went wrong!</Heading>
      <Text className="text-muted-foreground mb-6 max-w-md">
        {error.message || "Failed to load users data. Please try again."}
      </Text>
      <Button onClick={() => reset()} variant="default">
        Try again
      </Button>
    </div>
  );
}
