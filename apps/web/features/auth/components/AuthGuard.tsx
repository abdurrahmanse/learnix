"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/store/authStore";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      } else {
        setIsChecking(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [isAuthenticated, router]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}
