"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";

const ADMIN_APP_URL = process.env.NEXT_PUBLIC_ADMIN_URL || "http://localhost:3002";
const STUDENT_APP_URL = process.env.NEXT_PUBLIC_STUDENT_URL || "http://localhost:3001";
const WEB_APP_URL = process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3000";

export function GuestGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated && user) {
        if (user.role === "admin") {
          window.location.href = ADMIN_APP_URL + "/admin";
        } else if (user.role === "student") {
          window.location.href = STUDENT_APP_URL + "/my-courses";
        } else {
          window.location.href = WEB_APP_URL + "/profile";
        }
      } else if (isAuthenticated && !user) {
        // Wait for user details to be loaded
        setIsChecking(true);
      } else {
        setIsChecking(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [isAuthenticated, user]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}
