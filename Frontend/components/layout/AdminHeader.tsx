"use client";

import { useAuthStore } from "@/store/authStore";
import { AdminThemeToggle } from "@/components/layout/AdminThemeToggle";
import { LogOut, Bell, Search, Menu, User as UserIcon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAdminUIStore } from "@/store/adminUIStore";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AdminHeader() {
  const { user, logout } = useAuthStore();
  const { toggleMobileMenu } = useAdminUIStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const userInitials = user?.full_name
    ? user.full_name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase()
    : "AD";

  return (
    <header className="h-16 flex flex-shrink-0 items-center justify-between px-4 lg:px-8 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 transition-colors duration-300">
      
      {/* Left side - Mobile toggle & Search */}
      <div className="flex items-center space-x-4 flex-1">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMobileMenu}
          className="md:hidden text-muted-foreground hover:text-foreground"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="hidden sm:flex relative w-full max-w-sm group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search across modules..." 
            className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-primary/20 transition-all rounded-full"
          />
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center space-x-3 sm:space-x-4 ml-4">
        <AdminThemeToggle />
        
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive border-2 border-background"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full focus-visible:ring-primary/20">
              <Avatar className="h-9 w-9 border border-border shadow-sm">
                <AvatarImage src="" alt="Admin" />
                <AvatarFallback className="bg-primary/10 text-primary font-medium">{userInitials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.full_name || "Admin User"}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email || "admin@example.com"}
                </p>
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
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
