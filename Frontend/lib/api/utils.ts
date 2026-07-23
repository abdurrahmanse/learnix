import { AxiosError } from "axios";

/**
 * Standardized API error handler
 * Extracts meaningful error messages from Axios responses
 */
export const handleApiError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.detail || error.message || "An error occurred";
  }
  return "An unexpected error occurred";
};
