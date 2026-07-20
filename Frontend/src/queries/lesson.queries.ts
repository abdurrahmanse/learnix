// queries/lesson.queries.ts
// ─────────────────────────────────────────────────────
// TanStack Query definitions for lesson data
//
// lessonDetailQuery(id)         → queryFn: lesson.service.getLessonById
// courseProgressQuery(courseId) → queryFn: lesson.service.getCourseProgress
//
// Mutations:
// markCompleteMutation          → invalidates courseProgressQuery on success
// updatePositionMutation        → no cache invalidation (fire-and-forget)

