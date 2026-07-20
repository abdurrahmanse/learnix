// auth.types.ts
// ─────────────────────────────────────────────────────
// Types for authentication state and API responses
//
// User              — base user object (id, email, role, avatar_url, ...)
// AuthTokens        — { access_token, refresh_token }
// LoginPayload      — { email, password }
// RegisterPayload   — { email, username, full_name, password }
// AuthResponse      — { user: User, access_token: string }
// UserRole          — "student" | "admin"

