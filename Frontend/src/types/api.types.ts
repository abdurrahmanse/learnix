// api.types.ts
// ─────────────────────────────────────────────────────
// Generic API response wrapper types
//
// ApiResponse<T>    — { data: T, message?: string }
// ApiError          — { detail: string, status_code: number }
// PaginatedResponse<T> — { items: T[], total: number, page: number, limit: number, pages: number }
// ApiErrorResponse  — structured field error: { errors: FieldError[] }
// FieldError        — { field: string, message: string }

