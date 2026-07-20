// CourseGrid.tsx — Responsive grid of CourseCards.
// Used on: HomePage, CourseCatalogPage, MyCoursesPage
// Props:    courses, isLoading (shows <Skeleton> cards), columns, emptyMessage
// Internals: renders <EmptyState> when empty, <Skeleton> when loading
// Rule:     No page builds its own course grid — compose with this.
