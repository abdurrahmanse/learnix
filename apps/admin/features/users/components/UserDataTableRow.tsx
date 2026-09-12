import React from "react";
import { User } from "@learnix/types";
import { TableCell, TableRow, Badge, Button } from "@learnix/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@learnix/ui";
import { MoreHorizontal, ShieldAlert, UserX, CheckCircle2 } from "lucide-react";
import { formatDate } from "@learnix/utils";

interface UserDataTableRowProps {
  user: User;
}

export function UserDataTableRow({ user }: UserDataTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>
        <Badge variant={user.role === "admin" ? "destructive" : "secondary"} className="capitalize">
          {user.role}
        </Badge>
      </TableCell>
      <TableCell>
        {user.is_active ? (
          <span className="flex items-center text-green-500 text-sm">
            <CheckCircle2 className="mr-1 h-4 w-4" /> Active
          </span>
        ) : (
          <span className="flex items-center text-red-500 text-sm">
            <UserX className="mr-1 h-4 w-4" /> Inactive
          </span>
        )}
      </TableCell>
      <TableCell>{formatDate(user.created_at)}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Promote to Admin</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <ShieldAlert className="mr-2 h-4 w-4" /> Suspend User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
