// services/api.client.ts
// ─────────────────────────────────────────────────────
// Configured Axios instance — central HTTP client
//
// Configuration:
//   baseURL: API_BASE_URL from config
//   timeout: 30000ms
//   Content-Type: application/json
//
// Request Interceptor:
//   → Attach Bearer access_token from auth.store (Zustand)
//
// Response Interceptor:
//   → On 200-299: return response.data directly
//   → On 401: attempt silent token refresh via POST /auth/refresh
//   → If refresh succeeds: retry original request with new token
//   → If refresh fails: call auth.store.logout(), redirect to /login
//   → On other errors: throw structured ApiError

