"use client";

import { Button, Link } from "@learnix/ui";
import { LayoutDashboard } from "lucide-react";
import { GuestMenu } from "./UserMenu/GuestMenu";
import { AuthenticatedMenu } from "./UserMenu/AuthenticatedMenu";
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
      <GuestMenu />
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
    <AuthenticatedMenu onLogout={onLogout} />
  );
}
