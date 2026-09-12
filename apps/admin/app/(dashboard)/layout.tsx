import { AdminLayoutClient } from "@/features/core/components/layout/AdminLayoutClient";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayoutClient>{children}</AdminLayoutClient>
  );
}
