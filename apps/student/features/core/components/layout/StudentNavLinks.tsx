"use client";

import { BookOpen, GraduationCap, ClipboardList, Award, Star } from "lucide-react";
import { Link } from "@learnix/ui";
import { usePathname } from "next/navigation";
import { cn } from "@learnix/utils";

const navItems = [
  { href: "/my-courses", label: "My Courses", icon: BookOpen },
  { href: "/classroom", label: "Classroom", icon: GraduationCap },
  { href: "/assignments", label: "Assignments", icon: ClipboardList },
  { href: "/certificates", label: "Certificates", icon: Award },
  { href: "/reviews", label: "Reviews", icon: Star },
];

/** Desktop navigation links for the student portal. */
export function StudentNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname === href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </nav>
  );
}
