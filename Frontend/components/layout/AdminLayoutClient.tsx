"use client";

import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminHeader } from "@/components/layout/AdminHeader";
import { useAdminUIStore } from "@/store/adminUIStore";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { isMobileMenuOpen, setMobileMenuOpen, closeMobileMenu } = useAdminUIStore();
  const pathname = usePathname();
  
  // Prevent hydration mismatch for Zustand on initial render
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#0a0a0c]">
      {/* Desktop Sidebar */}
      <AdminSidebar />
      
      {/* Mobile Sidebar (Sheet) */}
      {mounted && (
        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="p-0 w-[260px] border-r-0 bg-transparent">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Force the sidebar to think it's not collapsed in mobile view */}
            <div className="[&>aside]:!w-[260px] [&>aside]:!flex">
              <AdminSidebar />
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <AdminHeader />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="mx-auto max-w-7xl h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
