"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/store/authStore";

const ADMIN_APP_URL =
  process.env.NEXT_PUBLIC_ADMIN_URL || "http://localhost:3001";
const STUDENT_APP_URL =
  process.env.NEXT_PUBLIC_STUDENT_URL || "http://localhost:3002";

export function GuestGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated && user) {
        if (user.role === "admin") {
          // Redirect admins to the standalone admin app
          window.location.href = ADMIN_APP_URL;
        } else {
          // Redirect regular users to the student portal
          window.location.href = STUDENT_APP_URL;
        }
      } else if (isAuthenticated && !user) {
        // Wait for user details to be loaded
        setIsChecking(true);
      } else {
        setIsChecking(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [isAuthenticated, user, router]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}
