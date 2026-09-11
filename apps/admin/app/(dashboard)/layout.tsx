import { ThemeProvider } from "@learnix/ui";
import { RoleGuard } from "@/features/auth/components/RoleGuard";
import { AdminLayoutClient } from "@/features/core/components/layout/AdminLayoutClient";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="learnix-theme-admin"
    >
      <RoleGuard allowedRoles={["admin"]}>
        <AdminLayoutClient>{children}</AdminLayoutClient>
      </RoleGuard>
    </ThemeProvider>
  );
}
