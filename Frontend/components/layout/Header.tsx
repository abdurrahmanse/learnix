"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Home, Activity, LogIn, UserPlus, BookOpen, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export function Header() {
  const { isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 md:px-8">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 md:px-6 shadow-sm backdrop-blur-md">
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="flex items-center space-x-2 text-primary">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg font-bold tracking-tight text-foreground">Learnix</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 opacity-80">
            <Link href="/" className="flex items-center space-x-2 transition-all hover:opacity-100 hover:text-primary">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link href="/health" className="flex items-center space-x-2 transition-all hover:opacity-100 hover:text-primary">
              <Activity className="h-4 w-4" />
              <span>System Health</span>
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <nav className="flex items-center space-x-2">
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" className="rounded-full px-5 text-muted-foreground hover:text-foreground transition-all flex items-center space-x-2" asChild>
                  <Link href="/login">
                    <LogIn className="h-4 w-4 mr-1" />
                    Log in
                  </Link>
                </Button>
                <Button className="rounded-full px-6 shadow-md transition-all hover:shadow-lg flex items-center space-x-2" asChild>
                  <Link href="/register">
                    <UserPlus className="h-4 w-4 mr-1" />
                    Sign up
                  </Link>
                </Button>
              </>
            ) : (
                <Button variant="outline" onClick={handleLogout} className="rounded-full px-5 shadow-sm transition-all hover:shadow-md flex items-center space-x-2 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20">
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
            )}
            <div className="pl-2 border-l border-border/40 ml-2 h-6 flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
