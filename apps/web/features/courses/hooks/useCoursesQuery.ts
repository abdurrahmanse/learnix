import { useQuery } from "@tanstack/react-query";
import { courseService, QUERY_KEYS } from "@learnix/api-client";

/** Returns all publicly published courses. */
export function useCoursesQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.courses.published(),
    queryFn: () => courseService.listPublishedCourses(),
  });
}

/** Returns a single course by id or slug. */
export function useCourseQuery(idOrSlug: string) {
  return useQuery({
    queryKey: QUERY_KEYS.courses.detail(idOrSlug),
    queryFn: () => courseService.getCourseDetails(idOrSlug),
    enabled: !!idOrSlug,
  });
}

/** Admin-only: returns all courses including drafts. */
export function useAdminCoursesQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.courses.admin(),
    queryFn: () => courseService.listAllCoursesAdmin(),
  });
}
