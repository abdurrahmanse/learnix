// hooks/useAuth.ts
// ─────────────────────────────────────────────────────
// Authentication hook — wraps Zustand auth store + TanStack Query
//
// Returns:
//   user             — current user object
//   isLoggedIn       — boolean
//   isAdmin          — user?.role === "admin"
//   isLoading        — auth loading state
//   login(payload)   — calls auth.service.login + updates store
//   logout()         — clears store + calls auth.service.logout
//   register(payload)— calls auth.service.register

