export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export const STORAGE_KEYS = {
  TOKEN: "access_token",
  USER: "user",
} as const;

export const DEFAULT_PAGE_SIZE = 10;
export const MAX_FILE_SIZE_MB = 5;
