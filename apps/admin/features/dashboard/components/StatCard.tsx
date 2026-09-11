import { Card, CardContent, CardHeader, CardTitle, Text } from "@learnix/ui";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  valueClassName?: string;
}

/** A single KPI stat card for the admin dashboard. */
export function StatCard({ title, value, change, icon: Icon, valueClassName }: StatCardProps) {
  return (
    <Card className="bg-background/60 backdrop-blur-xl border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${valueClassName ?? ""}`}>{value}</div>
        <Text className="text-xs text-muted-foreground">{change}</Text>
      </CardContent>
    </Card>
  );
}
