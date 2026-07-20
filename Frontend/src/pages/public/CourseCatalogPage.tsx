// CourseCatalogPage.tsx — /courses
// Layout:    <PublicLayout>
// Composes:
//   <SearchInput>             ← ui/SearchInput (debounced)
//   <TagFilter>               ← common/TagFilter (reused — same as HomePage categories)
//   <CourseGrid>              ← common/CourseGrid (same component as HomePage)
//     └── <CourseCard>        ← common/CourseCard
//   <Pagination>              ← ui/Pagination
// Hooks:     useCourses(filters), usePagination(total, limit)
