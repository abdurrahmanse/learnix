"use client";

import { UserCircle, LogOut } from "lucide-react";
import { Link } from "@learnix/ui";
import { type User } from "@learnix/types";

interface StudentUserMenuProps {
  user: User | null;
  onLogout: () => void;
}

/** User menu actions (Profile & Logout) for student portal. */
export function StudentUserMenu({ user, onLogout }: StudentUserMenuProps) {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/profile"
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      >
        <UserCircle className="h-4 w-4" />
        <span className="hidden sm:inline">{user?.full_name || "Profile"}</span>
      </Link>
      <button
        onClick={onLogout}
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
      >
        <LogOut className="h-4 w-4" />
      </button>
    </div>
  );
}
