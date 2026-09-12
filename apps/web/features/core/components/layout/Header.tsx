"use client";

import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";
import { ThemeToggle, Container, Link } from "@learnix/ui";
import { useAuthStore } from "@learnix/auth";
import type { NavRoute } from "@/features/core/config/navigation";
import { NavLinks } from "./NavLinks";
import dynamic from "next/dynamic";

// Dynamically import UserMenu with ssr: false to avoid hydration mismatch 
// with the persisted auth state in Zustand.
const UserMenu = dynamic(() => import("./UserMenu").then(mod => mod.UserMenu), { 
  ssr: false,
  loading: () => <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
});

export function Header({ routes = [] }: { routes?: NavRoute[] }) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <Container as="header" className="sticky top-4 z-50">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 md:px-6 shadow-sm backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-primary">
          <BookOpen className="h-6 w-6" />
          <span className="text-lg font-bold tracking-tight text-foreground">Learnix</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <NavLinks routes={routes} />

          <nav className="flex items-center space-x-2 border-l border-border/40 pl-4">
            <UserMenu
              isAuthenticated={isAuthenticated}
              user={user}
              onLogout={handleLogout}
              mounted={true} // Since it's ssr: false, it's always mounted when rendered
            />

            <div className="pl-2 border-l border-border/40 ml-2 h-6 flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </Container>
  );
}
