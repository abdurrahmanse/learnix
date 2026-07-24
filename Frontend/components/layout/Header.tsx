"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { 
  Home, Activity, LogIn, UserPlus, BookOpen, 
  LogOut, AppWindow, User, LayoutDashboard, 
  Book, MonitorPlay, Award, FileText, MessageSquare 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Container } from "@/components/ui/container";
import { useAuthStore } from "@/store/authStore";
import type { NavRoute } from "@/lib/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const iconMap: Record<string, React.ElementType> = {
  "/": Home,
  "/health": Activity,
  "/courses": BookOpen,
};

export function Header({ routes = [] }: { routes?: NavRoute[] }) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <Container as="header" className="sticky top-4 z-50">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 md:px-6 shadow-sm backdrop-blur-md">
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="flex items-center space-x-2 text-primary">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg font-bold tracking-tight text-foreground">Learnix</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 opacity-80 text-sm font-medium pr-2">
            {routes.filter((route) => {
              // Hide profile from main nav, as it moves to the Account dropdown
              if (route.path === "/profile") return false;
              return true;
            }).map((route) => {
              const Icon = iconMap[route.path] || AppWindow;
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`flex items-center space-x-2 transition-all hover:opacity-100 hover:text-primary ${isActive ? "text-primary opacity-100 font-semibold" : ""}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{route.name}</span>
                </Link>
              );
            })}
          </nav>

          <nav className="flex items-center space-x-2 border-l border-border/40 pl-4">
            {!mounted ? (
              <div className="flex items-center space-x-2">
                <div className="h-10 w-24 bg-muted animate-pulse rounded-full" />
                <div className="h-10 w-24 bg-muted animate-pulse rounded-full" />
              </div>
            ) : !isAuthenticated ? (
              // Guest State
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
            ) : user?.role === "admin" ? (
              // Admin State
              <Button className="rounded-full px-6 shadow-md transition-all hover:shadow-lg flex items-center space-x-2" asChild>
                <Link href="/admin">
                  <LayoutDashboard className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
              </Button>
            ) : (
              // Student / User State
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full px-5 shadow-sm transition-all hover:shadow-md flex items-center space-x-2">
                    <User className="h-4 w-4 mr-1 text-primary" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 font-medium">
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/my-courses">
                      <Book className="mr-2 h-4 w-4" />
                      My Courses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/classroom">
                      <MonitorPlay className="mr-2 h-4 w-4" />
                      Classroom
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/assignments">
                      <FileText className="mr-2 h-4 w-4" />
                      Assignments
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/certificates">
                      <Award className="mr-2 h-4 w-4" />
                      Certificates
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/reviews">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Reviews
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            
            <div className="pl-2 border-l border-border/40 ml-2 h-6 flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </Container>
  );
}
