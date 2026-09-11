"use client";

import React, { memo } from "react";
import { Course } from "@learnix/types";
import { TableCell, TableRow, Link } from "@learnix/ui";
import { Badge } from "@learnix/ui";
import { Button } from "@learnix/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@learnix/ui";
import { MoreHorizontal, Pencil, Eye, Trash } from "lucide-react";
import { formatDate, formatCurrency } from "@learnix/utils";

interface CourseTableRowProps {
  course: Course;
  onDelete?: (id: string) => void;
}

export const CourseTableRow = memo(function CourseTableRow({ course, onDelete }: CourseTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{course.title}</TableCell>
      <TableCell>
        <Badge
          variant={
            course.status === "published"
              ? "default"
              : course.status === "archived"
              ? "destructive"
              : "secondary"
          }
          className="capitalize"
        >
          {course.status}
        </Badge>
      </TableCell>
      <TableCell className="capitalize">{course.level}</TableCell>
      <TableCell>{formatCurrency(Number(course.price))}</TableCell>
      <TableCell>{formatDate(course.created_at)}</TableCell>
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
            <DropdownMenuItem asChild>
              <Link href={`/courses/${course.slug}`} target="_blank">
                <Eye className="mr-2 h-4 w-4" /> View Public
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/admin/courses/${course.id}/edit`}>
                <Pencil className="mr-2 h-4 w-4" /> Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:text-destructive focus:bg-destructive/10"
              onClick={() => onDelete && onDelete(course.id)}
            >
              <Trash className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
});
