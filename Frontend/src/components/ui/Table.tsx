// Table.tsx — Generic data table reused across all admin list pages
// Props:    columns: Column[], data: T[], isLoading, emptyMessage
// Column:   { key, header, render?: (row) => ReactNode, sortable? }
// Features: Loading skeleton rows, empty state, sortable headers
// Used by:  AdminCoursesPage, AdminUsersPage, AdminPurchasesPage, AdminBlogPage
// Rule:     No page builds its own table markup — use this with custom column defs
