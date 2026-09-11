"use client";

import { BookOpen } from "lucide-react";
import { Link } from "@learnix/ui";
import { useAuthStore } from "@learnix/auth";
import { authService } from "@learnix/api-client";
import { useRouter } from "next/navigation";
import { StudentNavLinks } from "./StudentNavLinks";
import { StudentUserMenu } from "./StudentUserMenu";

export function StudentHeader() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch {
      // Ignore
    }
    logout();
    router.replace("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/my-courses" className="flex items-center gap-2 text-primary font-bold text-lg">
          <BookOpen className="h-5 w-5" />
          <span>Learnix</span>
        </Link>

        {/* Nav */}
        <StudentNavLinks />

        {/* User */}
        <StudentUserMenu user={user} onLogout={handleLogout} />
      </div>
    </header>
  );
}
