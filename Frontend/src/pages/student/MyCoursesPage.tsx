// MyCoursesPage.tsx — /dashboard/courses
// Layout:    <DashboardLayout>
// Composes:
//   <PageHeader>              ← ui/PageHeader (title + subtitle)
//   <Tabs>                    ← ui/Tabs ("In Progress" | "Completed") — same Tabs as AdminPurchasesPage
//   <CourseGrid>              ← common/CourseGrid (showProgress=true) — SAME component as HomePage
//     └── <CourseCard>        ← common/CourseCard (variant="card", showProgress=true)
//   <EmptyState>              ← ui/EmptyState (no enrollments found)
// Hooks:     useEnrolledCourses, usePagination
