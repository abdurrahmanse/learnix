import { ThemeProvider } from "@/components/theme-provider";
import { RoleGuard } from "@/features/auth/components/RoleGuard";
import { AdminLayoutClient } from "@/components/layout/AdminLayoutClient";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="learnix-theme-admin">
      <RoleGuard allowedRoles={["admin"]}>
        <AdminLayoutClient>
          {children}
        </AdminLayoutClient>
      </RoleGuard>
    </ThemeProvider>
  );
}
