"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/features/core/components/AdminPageHeader";
import { UserDataTable } from "@/features/users/components/UserDataTable";
import { User } from "@learnix/types";
import { userService } from "@learnix/api-client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.listAllUsersAdmin();
        setUsers(data);
      } catch (error) {
        toast.error("Failed to fetch users");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="space-y-6 fade-in-up">
      <AdminPageHeader 
        title="User Management" 
        description="Manage your platform's users, roles, and status here."
        breadcrumbs={[{ title: "User Management" }]}
      />
      
      {isLoading ? (
        <div className="flex h-64 items-center justify-center rounded-md border border-border/50 bg-background/50 backdrop-blur-xl">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <UserDataTable users={users} />
      )}
    </div>
  );
}
