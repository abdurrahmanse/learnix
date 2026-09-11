import axios, { AxiosError } from "axios";
import { API_BASE_URL, storage } from "@learnix/utils";
import { ApiError, ApiErrorResponse } from "./error";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    // 1. Check for network errors or timeouts
    if (!error.response) {
      return Promise.reject(
        new ApiError("Network error. Please check your connection.", 0)
      );
    }

    const { status, data } = error.response;

    // 2. Handle 401 Unauthorized (Auto-Logout)
    if (status === 401) {
      storage.clearAuth();
      window.dispatchEvent(new Event("auth:unauthorized"));
    }

    // 3. Format the error message
    let errorMessage = "An unexpected error occurred.";
    if (data?.detail) {
      if (typeof data.detail === "string") {
        errorMessage = data.detail;
      } else if (Array.isArray(data.detail) && data.detail.length > 0) {
        errorMessage = data.detail.map((err) => err.msg).join(", ");
      }
    }

    return Promise.reject(new ApiError(errorMessage, status, data));
  }
);
