import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { courseService } from "@/lib/api/courses";
import { Course } from "@/types/course";
import { CourseFormValues } from "@/components/courses/CourseForm";
import { toast } from "sonner";
import { QUERY_KEYS } from "@/lib/react-query";

export function useCoursesQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.courses.published(),
    queryFn: () => courseService.listPublishedCourses(),
  });
}

export function useAdminCoursesQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.courses.admin(),
    queryFn: () => courseService.listAllCoursesAdmin(),
  });
}

export function useCourseQuery(idOrSlug: string) {
  return useQuery({
    queryKey: QUERY_KEYS.courses.detail(idOrSlug),
    queryFn: () => courseService.getCourseDetails(idOrSlug),
    enabled: !!idOrSlug,
  });
}

export function useCreateCourseMutation(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: CourseFormValues) => {
      return await courseService.createCourse(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.courses.all });
      toast.success("Course created successfully!");
      if (onSuccessCallback) onSuccessCallback();
    },
  });
}

export function useUpdateCourseMutation(courseId: string, onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: Partial<CourseFormValues>) => {
      return await courseService.updateCourse(courseId, data);
    },
    onSuccess: (updatedCourse: Course) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.courses.all });
      queryClient.setQueryData(QUERY_KEYS.courses.detail(courseId), updatedCourse);
      if (updatedCourse.slug) {
        queryClient.setQueryData(QUERY_KEYS.courses.detail(updatedCourse.slug), updatedCourse);
      }
      toast.success("Course updated successfully!");
      if (onSuccessCallback) onSuccessCallback();
    },
  });
}

export function useDeleteCourseMutation(onSuccessCallback?: () => void) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (courseId: string) => {
      return await courseService.deleteCourse(courseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.courses.all });
      toast.success("Course deleted successfully!");
      if (onSuccessCallback) onSuccessCallback();
    },
  });
}
