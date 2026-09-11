"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";

const WEB_APP_URL = process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3000";

export function AuthGuard({ children, requireRole }: { children: React.ReactNode; requireRole?: "admin" | "student" | "user" }) {
  const { isAuthenticated, user } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        window.location.href = WEB_APP_URL + "/login";
      } else if (isAuthenticated && !user) {
        // Wait for user details to load
        setIsChecking(true);
      } else if (requireRole && user && user.role !== requireRole) {
        // Enforce RBAC bounds (prevent students accessing admin, etc.)
        window.location.href = WEB_APP_URL + "/login";
      } else {
        setIsChecking(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [isAuthenticated, user, requireRole]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}
