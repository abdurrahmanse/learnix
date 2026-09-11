"use client";

import { usePathname } from "next/navigation";
import { BookOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@learnix/utils";
import { useAdminUIStore } from "@/features/core/store/adminUIStore";
import { Button, ScrollArea, TooltipProvider, Link } from "@learnix/ui";
import { adminRoutes } from "@/features/core/config/admin-routes";
import { SidebarNavItem } from "./SidebarNavItem";

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
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border/50">
        <Link
          href="/admin"
          className={cn(
            "flex items-center space-x-2 text-primary overflow-hidden transition-all duration-300",
            isSidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}
        >
          <BookOpen className="h-6 w-6 flex-shrink-0" />
          <span className="text-lg font-bold tracking-tight text-foreground whitespace-nowrap">Learnix Admin</span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn("h-8 w-8 text-muted-foreground hover:text-foreground", isSidebarCollapsed && "mx-auto")}
        >
          {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          <TooltipProvider delayDuration={0}>
            {adminRoutes.map((route) => {
              const isActive =
                route.path === "/admin"
                  ? pathname === "/admin"
                  : pathname === route.path || pathname.startsWith(`${route.path}/`);

              return (
                <SidebarNavItem
                  key={route.path}
                  route={route}
                  isActive={isActive}
                  isCollapsed={isSidebarCollapsed}
                />
              );
            })}
          </TooltipProvider>
        </nav>
      </ScrollArea>
    </aside>
  );
}
