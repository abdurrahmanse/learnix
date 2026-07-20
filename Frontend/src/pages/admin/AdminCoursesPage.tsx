// AdminCoursesPage.tsx — /admin/courses
// Layout:    <AdminLayout>
// Composes:
//   <PageHeader action={<Button>Create Course</Button>} />  ← ui/PageHeader with action slot
//   <SearchInput>             ← ui/SearchInput (same as CourseCatalogPage)
//   <Table>                   ← ui/Table (same generic Table as AdminDashboardPage)
//   <Badge>                   ← ui/Badge (published/draft status)
//   <Dropdown>                ← ui/Dropdown (row action menu: Edit | Delete | Publish)
//   <ConfirmModal>            ← ui/ConfirmModal (delete course confirmation)
//   <Pagination>              ← ui/Pagination (same as CourseCatalogPage)
// Hooks:     useCourses, usePagination, useModal (for confirm dialog)
