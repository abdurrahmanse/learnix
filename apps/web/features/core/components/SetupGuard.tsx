"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function SetupGuard({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip guard if we are already on the setup page
    if (pathname === "/setup") {
      setIsReady(true);
      return;
    }

    const checkHealth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/health");
        const data = await res.json();
        
        if (data.setup_required || res.status === 503) {
          router.replace("/setup");
        } else {
          setIsReady(true);
        }
      } catch (err) {
        // If the backend is completely down, we might want to still show children or an error.
        // For now, let it render if it fails to connect so we don't infinitely block.
        setIsReady(true);
      }
    };

    checkHealth();
  }, [pathname, router]);

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
