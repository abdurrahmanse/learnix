import { useQuery } from "@tanstack/react-query";
import { courseService } from "@/lib/api/courses";
import { useApiMutation } from "@/hooks/useApiMutation";
import { Course, CourseCreate } from "../types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export const COURSE_KEYS = {
  all: ["courses"] as const,
  published: () => [...COURSE_KEYS.all, "published"] as const,
  admin: () => [...COURSE_KEYS.all, "admin"] as const,
  detail: (idOrSlug: string) => [...COURSE_KEYS.all, "detail", idOrSlug] as const,
};

export function useCoursesQuery() {
  return useQuery({
    queryKey: COURSE_KEYS.published(),
    queryFn: () => courseService.listPublishedCourses(),
  });
}

export function useAdminCoursesQuery() {
  return useQuery({
    queryKey: COURSE_KEYS.admin(),
    queryFn: () => courseService.listAllCoursesAdmin(),
  });
}

export function useCourseQuery(idOrSlug: string) {
  return useQuery({
    queryKey: COURSE_KEYS.detail(idOrSlug),
    queryFn: () => courseService.getCourseDetails(idOrSlug),
    enabled: !!idOrSlug,
  });
}

export function useCreateCourseMutation(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  
  return useApiMutation({
    mutationFn: async (data: CourseCreate) => {
      return await courseService.createCourse(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COURSE_KEYS.all });
      toast.success("Course created successfully!");
      if (onSuccessCallback) onSuccessCallback();
    },
  });
}

export function useUpdateCourseMutation(courseId: string, onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  
  return useApiMutation({
    mutationFn: async (data: Partial<CourseCreate>) => {
      return await courseService.updateCourse(courseId, data);
    },
    onSuccess: (updatedCourse: Course) => {
      queryClient.invalidateQueries({ queryKey: COURSE_KEYS.all });
      queryClient.setQueryData(COURSE_KEYS.detail(courseId), updatedCourse);
      if (updatedCourse.slug) {
        queryClient.setQueryData(COURSE_KEYS.detail(updatedCourse.slug), updatedCourse);
      }
      toast.success("Course updated successfully!");
      if (onSuccessCallback) onSuccessCallback();
    },
  });
}

export function useDeleteCourseMutation(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  
  return useApiMutation({
    mutationFn: async (courseId: string) => {
      return await courseService.deleteCourse(courseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COURSE_KEYS.all });
      toast.success("Course deleted successfully!");
      if (onSuccessCallback) onSuccessCallback();
    },
  });
}
