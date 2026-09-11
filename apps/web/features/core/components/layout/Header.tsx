"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";
import { ThemeToggle, Container, Link } from "@learnix/ui";
import { useAuthStore } from "@learnix/auth";
import type { NavRoute } from "@/features/core/config/navigation";
import { NavLinks } from "./NavLinks";
import { UserMenu } from "./UserMenu";

export function Header({ routes = [] }: { routes?: NavRoute[] }) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
              mounted={mounted}
              isAuthenticated={isAuthenticated}
              user={user}
              onLogout={handleLogout}
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
