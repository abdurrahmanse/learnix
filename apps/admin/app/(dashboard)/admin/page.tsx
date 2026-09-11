import { AdminPageHeader } from "@/features/core/components/AdminPageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Text } from "@learnix/ui";
import { Users, BookOpen, CreditCard, LayoutDashboard } from "lucide-react";
import { StatCard } from "@/features/dashboard/components/StatCard";

const stats = [
  { title: "Total Users", value: "10,231", change: "+20.1% from last month", icon: Users },
  { title: "Active Courses", value: "142", change: "+12 new this week", icon: BookOpen },
  { title: "Total Revenue", value: "$45,231.89", change: "+19% from last month", icon: CreditCard },
  { title: "System Health", value: "Online", change: "All systems operational", icon: LayoutDashboard, valueClassName: "text-green-500" },
] as const;

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 fade-in-up">
      <AdminPageHeader
        title="Dashboard Overview"
        description="Welcome to the Learnix Admin System."
        breadcrumbs={[]}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <Card className="border-border/50 shadow-sm bg-background/60 backdrop-blur-xl mt-6">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>A high-level overview of recent platform events.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] rounded-lg border border-dashed border-border/60 bg-muted/20 flex items-center justify-center">
            <Text className="text-muted-foreground text-sm font-medium">Activity Chart Placeholder</Text>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
