"use client";

import { Button, Link } from "@learnix/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@learnix/ui";
import {
  LogIn,
  UserPlus,
  LayoutDashboard,
  User,
  Book,
  MonitorPlay,
  FileText,
  Award,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { type User as UserType } from "@learnix/types";

interface UserMenuProps {
  mounted: boolean;
  isAuthenticated: boolean;
  user: UserType | null;
  onLogout: () => void;
}

/** Renders guest buttons, admin dashboard link, or authenticated user dropdown. */
export function UserMenu({ mounted, isAuthenticated, user, onLogout }: UserMenuProps) {
  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-10 w-24 bg-muted animate-pulse rounded-full" />
        <div className="h-10 w-24 bg-muted animate-pulse rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <Button
          variant="ghost"
          className="rounded-full px-5 text-muted-foreground hover:text-foreground transition-all flex items-center space-x-2"
          asChild
        >
          <Link href="/login">
            <LogIn className="h-4 w-4 mr-1" />
            Log in
          </Link>
        </Button>
        <Button
          className="rounded-full px-6 shadow-md transition-all hover:shadow-lg flex items-center space-x-2"
          asChild
        >
          <Link href="/register">
            <UserPlus className="h-4 w-4 mr-1" />
            Sign up
          </Link>
        </Button>
      </>
    );
  }

  if (user?.role === "admin") {
    return (
      <Button
        className="rounded-full px-6 shadow-md transition-all hover:shadow-lg flex items-center space-x-2"
        asChild
      >
        <Link href="/admin">
          <LayoutDashboard className="h-4 w-4 mr-1" />
          Dashboard
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full px-5 shadow-sm transition-all hover:shadow-md flex items-center space-x-2"
        >
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
        <DropdownMenuItem
          onClick={onLogout}
          className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
