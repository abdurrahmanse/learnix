// hooks/useCourses.ts
// ─────────────────────────────────────────────────────
// Course data hooks — wraps TanStack Query for course API calls
//
// useCourses(filters)      → { courses, isLoading, error }
// useCourseDetail(slug)    → { course, isLoading, error }
// useEnrolledCourses()     → { courses, isLoading }
// useCreateCourse()        → useMutation for admin course creation
// useUpdateCourse()        → useMutation for admin course editing
// useDeleteCourse()        → useMutation for admin course deletion

