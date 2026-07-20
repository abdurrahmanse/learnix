// router/AdminRoutes.tsx
// ─────────────────────────────────────────────────────
// Admin-only protected routes
// Guard: redirect to /dashboard if role !== "admin"
//
//   /admin                            → AdminDashboardPage
//   /admin/courses                    → AdminCoursesPage
//   /admin/courses/new                → AdminCourseEditorPage
//   /admin/courses/:id/edit           → AdminCourseEditorPage
//   /admin/blog                       → AdminBlogPage
//   /admin/blog/new                   → AdminBlogEditorPage
//   /admin/users                      → AdminUsersPage
//   /admin/purchases                  → AdminPurchasesPage

