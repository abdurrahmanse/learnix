import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="space-y-6 fade-in-up">
      <AdminPageHeader 
        title="User Management" 
        description="Manage your platform's User Management here."
        breadcrumbs={[{ title: "User Management" }]}
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
            <p className="text-muted-foreground text-sm font-medium">Placeholder for User Management Interface</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
