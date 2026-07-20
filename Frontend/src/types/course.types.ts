// course.types.ts
// ─────────────────────────────────────────────────────
// Types for courses, sections, and lessons
//
// Course            — full course object
// CourseCard        — minimal course for listing (id, title, slug, thumbnail, price, level)
// CourseLevel       — "beginner" | "intermediate" | "advanced"
// Section           — { id, title, order_index, lessons: Lesson[] }
// Lesson            — { id, title, video_url, duration, is_preview, is_published, order_index }
// CourseCurriculum  — Course + sections + lessons (full nested structure)
// CourseFilters     — { category?, level?, page, limit }

