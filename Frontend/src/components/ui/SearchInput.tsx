// SearchInput.tsx — Reused search bar with debounce built-in
// Props:    value, onChange, placeholder, debounceMs (default 300)
// Behavior: Internally debounced — parent gets value only after user stops typing
// Used by:  CourseCatalogPage, BlogPage, AdminUsersPage, AdminCoursesPage
// Rule:     All search inputs use this — debounce logic is never duplicated
