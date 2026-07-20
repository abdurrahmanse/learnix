// constants/queryKeys.ts
// ─────────────────────────────────────────────────────
// TanStack Query cache key factories (single source of truth)
// Always use these keys to ensure consistent cache invalidation
//
// QUERY_KEYS.courses.all              → ["courses"]
// QUERY_KEYS.courses.detail(slug)     → ["courses", slug]
// QUERY_KEYS.courses.enrolled         → ["courses", "enrolled"]
// QUERY_KEYS.progress.course(id)      → ["progress", id]
// QUERY_KEYS.subscription.me          → ["subscription", "me"]
// QUERY_KEYS.blog.all                 → ["blog"]
// QUERY_KEYS.blog.detail(slug)        → ["blog", slug]
// QUERY_KEYS.payments.history         → ["payments", "history"]
// QUERY_KEYS.users.me                 → ["users", "me"]

