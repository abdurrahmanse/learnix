// queries/course.queries.ts
// ─────────────────────────────────────────────────────
// TanStack Query definitions for course data
//
// coursesQuery(filters)       → queryFn: course.service.getCourses
// courseDetailQuery(slug)     → queryFn: course.service.getCourseBySlug
// enrolledCoursesQuery()      → queryFn: course.service.getEnrolledCourses
//
// Mutations:
// createCourseMutation        → invalidates coursesQuery on success
// updateCourseMutation        → invalidates courseDetailQuery on success
// deleteCourseMutation        → invalidates coursesQuery on success

