import { AdminPageHeader } from "@/features/core/components/AdminPageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Text } from "@learnix/ui";
import { LayoutDashboard } from "lucide-react";

export default function EnrollmentsPage() {
  return (
    <div className="space-y-6 fade-in-up">
      <AdminPageHeader 
        title="Enrollments" 
        description="Manage your platform's Enrollments here."
        breadcrumbs={[{ title: "Enrollments" }]}
      />
      
      <Card className="border-border/50 shadow-sm bg-background/60 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
            <span>Overview</span>
          </CardTitle>
          <CardDescription>
            This module is currently under development.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] rounded-lg border border-dashed border-border/60 bg-muted/20 flex items-center justify-center">
            <Text className="text-muted-foreground text-sm font-medium">Placeholder for Enrollments Interface</Text>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
