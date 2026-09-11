// Shared API client for the Learnix monorepo

// Core
export { api } from "./instance";
export { getQueryClient, QUERY_KEYS } from "./query-client";

// Error handling
export { ApiError } from "./error";
export type { ApiErrorResponse } from "./error";
export { handleApiError } from "./utils";

// Services
export { authService } from "./services/auth";
export { courseService } from "./services/courses";
export { userService } from "./services/users";
export { uploadMedia } from "./services/media";
export type { UploadResponse } from "./services/media";
export { systemService } from "./services/system";
export type { HealthCheckResponse } from "./services/system";
