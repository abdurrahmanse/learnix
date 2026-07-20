// store/auth.store.ts
// ─────────────────────────────────────────────────────
// Zustand Global Auth Store
//
// State:
//   user: User | null               — current logged-in user
//   accessToken: string | null      — JWT access token (in-memory only)
//   isLoggedIn: boolean             — derived from user !== null
//   isLoading: boolean              — auth initialization state
//
// Actions:
//   setUser(user)                   — set user after login/register
//   setAccessToken(token)           — store new access token
//   logout()                        — clear user + token, redirect /login
//   initializeAuth()                — on app mount: try refresh token silently
//
// Persistence:
//   accessToken is NEVER persisted to localStorage (security)
//   Refresh token is in httpOnly cookie (handled by browser)
//   user object is persisted to sessionStorage for UX

