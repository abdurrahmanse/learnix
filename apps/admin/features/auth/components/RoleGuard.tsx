"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/store/authStore";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      } else if (user && !allowedRoles.includes(user.role)) {
        router.replace("/unauthorized");
      } else {
        setIsChecking(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [isAuthenticated, user, allowedRoles, router]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}
