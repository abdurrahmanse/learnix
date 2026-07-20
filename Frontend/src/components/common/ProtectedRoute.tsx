// ProtectedRoute.tsx — Route guard. Used by router.tsx.
// Props:    requiredRole?: "student" | "admin"
// Logic:    loading? → <PageSpinner> | not logged in? → /login
//           wrong role? → /dashboard | else → <Outlet />
// Internals: reads from auth.store (Zustand)
