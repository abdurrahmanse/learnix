"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Users, BookOpen, PlayCircle, 
  UserCheck, CreditCard, Repeat, Tag, FileText, 
  Award, MessageSquare, Bell, BarChart3, Settings,
  PanelLeftClose, PanelLeftOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAdminUIStore } from "@/store/adminUIStore";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const adminRoutes = [
  { path: "/admin", name: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/users", name: "Users", icon: Users },
  { path: "/admin/courses", name: "Courses", icon: BookOpen },
  { path: "/admin/lessons", name: "Lessons", icon: PlayCircle },
  { path: "/admin/enrollments", name: "Enrollments", icon: UserCheck },
  { path: "/admin/payments", name: "Payments", icon: CreditCard },
  { path: "/admin/subscriptions", name: "Subscriptions", icon: Repeat },
  { path: "/admin/coupons", name: "Coupons", icon: Tag },
  { path: "/admin/assignments", name: "Assignments", icon: FileText },
  { path: "/admin/certificates", name: "Certificates", icon: Award },
  { path: "/admin/reviews", name: "Reviews", icon: MessageSquare },
  { path: "/admin/notifications", name: "Notifications", icon: Bell },
  { path: "/admin/analytics", name: "Analytics", icon: BarChart3 },
  { path: "/admin/settings", name: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { isSidebarCollapsed, toggleSidebar } = useAdminUIStore();

  return (
    <aside 
      className={cn(
        "hidden md:flex flex-col border-r border-border/50 bg-background/60 backdrop-blur-xl h-screen sticky top-0 transition-all duration-300 ease-in-out z-20",
        isSidebarCollapsed ? "w-[80px]" : "w-[260px]"
      )}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border/50">
        <Link href="/admin" className={cn("flex items-center space-x-2 text-primary overflow-hidden transition-all duration-300", isSidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>
          <BookOpen className="h-6 w-6 flex-shrink-0" />
          <span className="text-lg font-bold tracking-tight text-foreground whitespace-nowrap">Learnix Admin</span>
        </Link>
        
        {/* Toggle Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className={cn("h-8 w-8 text-muted-foreground hover:text-foreground", isSidebarCollapsed && "mx-auto")}
        >
          {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Links */}
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          <TooltipProvider delayDuration={0}>
            {adminRoutes.map((route) => {
              const isActive = pathname === route.path || pathname.startsWith(`${route.path}/`);
              
              const LinkContent = (
                <Link
                  href={route.path}
                  className={cn(
                    "flex items-center rounded-lg font-medium transition-all duration-200 group relative",
                    isSidebarCollapsed ? "justify-center h-10 w-10 mx-auto" : "space-x-3 px-3 py-2.5",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  <route.icon className={cn("flex-shrink-0 transition-transform duration-200", isSidebarCollapsed ? "h-5 w-5" : "h-4 w-4", !isActive && "group-hover:scale-110")} />
                  
                  {!isSidebarCollapsed && (
                    <span className="text-sm whitespace-nowrap">{route.name}</span>
                  )}
                </Link>
              );

              if (isSidebarCollapsed) {
                return (
                  <Tooltip key={route.path}>
                    <TooltipTrigger asChild>
                      {LinkContent}
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={10} className="font-medium">
                      {route.name}
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return <div key={route.path}>{LinkContent}</div>;
            })}
          </TooltipProvider>
        </nav>
      </ScrollArea>
    </aside>
  );
}
