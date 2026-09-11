"use client";

import { useAuthStore } from "@learnix/auth";
import { AdminThemeToggle } from "@/features/core/components/layout/AdminThemeToggle";
import { Bell, Menu } from "lucide-react";
import { Button } from "@learnix/ui";
import { useRouter } from "next/navigation";
import { useAdminUIStore } from "@/features/core/store/adminUIStore";
import { AdminSearchBar } from "./AdminSearchBar";
import { AdminUserMenu } from "./AdminUserMenu";

export function AdminHeader() {
  const { user, logout } = useAuthStore();
  const { toggleMobileMenu } = useAdminUIStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="h-16 flex flex-shrink-0 items-center justify-between px-4 lg:px-8 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 transition-colors duration-300">
      {/* Left — mobile toggle + search */}
      <div className="flex items-center space-x-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="md:hidden text-muted-foreground hover:text-foreground"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <AdminSearchBar />
      </div>

      {/* Right — theme, notifications, user */}
      <div className="flex items-center space-x-3 sm:space-x-4 ml-4">
        <AdminThemeToggle />

        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive border-2 border-background" />
        </Button>

        <AdminUserMenu user={user} onLogout={handleLogout} />
      </div>
    </header>
  );
}
