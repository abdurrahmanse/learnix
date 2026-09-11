import { AxiosError } from "axios";
import { ApiError } from "./error";

/**
 * Standardized API error handler
 * Extracts meaningful error messages from Axios responses or ApiErrors
 */
export const handleApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof AxiosError) {
    return error.response?.data?.detail || error.message || "An error occurred";
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
};
