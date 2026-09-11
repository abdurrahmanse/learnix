"use client";

import { usePathname } from "next/navigation";
import { Link } from "@learnix/ui";
import { Home, Activity, BookOpen, AppWindow } from "lucide-react";
import type { NavRoute } from "@/features/core/config/navigation";

const iconMap: Record<string, React.ElementType> = {
  "/": Home,
  "/health": Activity,
  "/courses": BookOpen,
};

interface NavLinksProps {
  routes: NavRoute[];
}

export function NavLinks({ routes }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-6 opacity-80 text-sm font-medium pr-2">
      {routes
        .filter((route) => route.path !== "/profile")
        .map((route) => {
          const Icon = iconMap[route.path] || AppWindow;
          const isActive = pathname === route.path;
          return (
            <Link
              key={route.path}
              href={route.path}
              className={`flex items-center space-x-2 transition-all hover:opacity-100 hover:text-primary ${
                isActive ? "text-primary opacity-100 font-semibold" : ""
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{route.name}</span>
            </Link>
          );
        })}
    </nav>
  );
}
