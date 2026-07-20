// usePagination.ts — Generic pagination logic
// Reused by every paginated list page
// Props:    total, limit, initialPage
// Returns:  { page, totalPages, goTo, next, prev, pageItems }
// Used by:  CourseCatalogPage, BlogPage, AdminUsersPage, AdminPurchasesPage
// Rule:     Pagination logic lives here once — never per-page
