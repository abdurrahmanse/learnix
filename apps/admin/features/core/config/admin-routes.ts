import {
  LayoutDashboard, Users, BookOpen, PlayCircle,
  UserCheck, CreditCard, Repeat, Tag, FileText,
  Award, MessageSquare, Bell, BarChart3, Settings,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface AdminRoute {
  path: string;
  name: string;
  icon: LucideIcon;
}

export const adminRoutes: AdminRoute[] = [
  { path: "/admin", name: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/users", name: "Users", icon: Users },
  { path: "/admin/courses", name: "Courses", icon: BookOpen },
  { path: "/admin/lessons", name: "Lessons", icon: PlayCircle },
  { path: "/admin/enrollments", name: "Enrollments", icon: UserCheck },
  { path: "/admin/payments", name: "Payments", icon: CreditCard },
  { path: "/admin/subscriptions", name: "Subscriptions", icon: Repeat },
  { path: "/admin/coupons", name: "Coupons", icon: Tag },
  { path: "/admin/assignments", name: "Assignments", icon: FileText },
  { path: "/admin/certificates", name: "Certificates", icon: Award },
  { path: "/admin/reviews", name: "Reviews", icon: MessageSquare },
  { path: "/admin/notifications", name: "Notifications", icon: Bell },
  { path: "/admin/analytics", name: "Analytics", icon: BarChart3 },
  { path: "/admin/settings", name: "Settings", icon: Settings },
];
