"use client";

import React, { memo } from "react";
import { Course } from "@learnix/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@learnix/ui";
import { CourseTableRow } from "./CourseTableRow";

interface CourseDataTableProps {
  courses: Course[];
  onDelete?: (id: string) => void;
}

export const CourseDataTable = memo(function CourseDataTable({ courses, onDelete }: CourseDataTableProps) {
  return (
    <div className="rounded-md border border-border/50 bg-background/50 backdrop-blur-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                No courses found.
              </TableCell>
            </TableRow>
          ) : (
            courses.map((course) => (
              <CourseTableRow key={course.id} course={course} onDelete={onDelete} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
});
