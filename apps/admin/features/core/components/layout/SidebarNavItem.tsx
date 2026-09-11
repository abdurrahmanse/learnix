"use client";

import { cn } from "@learnix/utils";
import { Tooltip, TooltipContent, TooltipTrigger, Link } from "@learnix/ui";
import { type AdminRoute } from "@/features/core/config/admin-routes";

interface SidebarNavItemProps {
  route: AdminRoute;
  isActive: boolean;
  isCollapsed: boolean;
}

/** A single collapsible sidebar navigation item with tooltip when collapsed. */
export function SidebarNavItem({ route, isActive, isCollapsed }: SidebarNavItemProps) {
  const linkContent = (
    <Link
      href={route.path}
      className={cn(
        "flex items-center rounded-lg font-medium transition-all duration-200 group relative",
        isCollapsed ? "justify-center h-10 w-10 mx-auto" : "space-x-3 px-3 py-2.5",
        isActive
          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
          : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
      )}
    >
      <route.icon
        className={cn(
          "flex-shrink-0 transition-transform duration-200",
          isCollapsed ? "h-5 w-5" : "h-4 w-4",
          !isActive && "group-hover:scale-110"
        )}
      />
      {!isCollapsed && <span className="text-sm whitespace-nowrap">{route.name}</span>}
    </Link>
  );

  if (isCollapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
        <TooltipContent side="right" sideOffset={10} className="font-medium">
          {route.name}
        </TooltipContent>
      </Tooltip>
    );
  }

  return <div>{linkContent}</div>;
}
