"use client";

import { AuthGuard } from "@learnix/auth";
import { StudentHeader } from "@/features/core/components/layout/StudentHeader";

export default function StudentPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-background">
        <StudentHeader />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
