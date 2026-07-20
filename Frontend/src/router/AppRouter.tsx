// router/AppRouter.tsx
// ─────────────────────────────────────────────────────
// Root React Router v6 configuration
//
// Composes all route groups:
//   PublicRoutes    — accessible by everyone
//   StudentRoutes   — protected, requires isLoggedIn
//   AdminRoutes     — protected, requires role === "admin"
//
// Also handles:
//   404 catch-all  → NotFoundPage
//   Auth init on mount (silent token refresh)

