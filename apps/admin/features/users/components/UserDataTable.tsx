"use client";

import React, { memo } from "react";

import { User } from "@learnix/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@learnix/ui";
import { Button } from "@learnix/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@learnix/ui";
import { UserDataTableRow } from "./UserDataTableRow";

interface UserDataTableProps {
  users: User[];
}

export const UserDataTable = memo(function UserDataTable({ users }: UserDataTableProps) {
  return (
    <div className="rounded-md border border-border/50 bg-background/50 backdrop-blur-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                No users found.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <UserDataTableRow key={user.id} user={user} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
});
