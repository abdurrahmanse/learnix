import { ThemeProvider } from "@learnix/ui";
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
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </ThemeProvider>
  );
}
