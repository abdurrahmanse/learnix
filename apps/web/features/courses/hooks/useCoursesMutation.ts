import { useMutation, useQueryClient } from "@tanstack/react-query";
import { courseService, QUERY_KEYS } from "@learnix/api-client";
import { type Course } from "@learnix/types";
import { type CourseFormValues } from "@learnix/utils";
import { toast } from "sonner";

export function useCreateCourseMutation(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CourseFormValues) => courseService.createCourse(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.courses.all });
      toast.success("Course created successfully!");
      onSuccessCallback?.();
    },
  });
}

export function useUpdateCourseMutation(courseId: string, onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<CourseFormValues>) => courseService.updateCourse(courseId, data),
    onSuccess: (updatedCourse: Course) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.courses.all });
      queryClient.setQueryData(QUERY_KEYS.courses.detail(courseId), updatedCourse);
      if (updatedCourse.slug) {
        queryClient.setQueryData(QUERY_KEYS.courses.detail(updatedCourse.slug), updatedCourse);
      }
      toast.success("Course updated successfully!");
      onSuccessCallback?.();
    },
  });
}

export function useDeleteCourseMutation(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: string) => courseService.deleteCourse(courseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.courses.all });
      toast.success("Course deleted successfully!");
      onSuccessCallback?.();
    },
  });
}
