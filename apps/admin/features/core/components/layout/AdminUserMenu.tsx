"use client";

import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon, Settings } from "lucide-react";
import { Button, Text } from "@learnix/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@learnix/ui";
import { type User } from "@learnix/types";

interface AdminUserMenuProps {
  user: User | null;
  onLogout: () => void;
}

function getUserInitials(fullName: string | undefined): string {
  if (!fullName) return "AD";
  return fullName.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
}

/** Admin user avatar + dropdown with profile, settings, and logout actions. */
export function AdminUserMenu({ user, onLogout }: AdminUserMenuProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-9 w-9 rounded-full focus-visible:ring-primary/20">
          <Avatar className="h-9 w-9 border border-border shadow-sm">
            <AvatarImage src="" alt="Admin" />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {getUserInitials(user?.full_name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <Text className="text-sm font-medium leading-none">{user?.full_name || "Admin User"}</Text>
            <Text className="text-xs leading-none text-muted-foreground">{user?.email || "admin@example.com"}</Text>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/admin/profile")} className="cursor-pointer">
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/admin/settings")} className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout} className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
