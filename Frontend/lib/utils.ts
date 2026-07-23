import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMediaUrl(path: string | undefined): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  // Remove /api/v1 from the end of baseUrl if it exists, since uploads are served from /uploads
  const rootUrl = baseUrl.replace(/\/api\/v1\/?$/, "");
  
  return `${rootUrl}/${path.replace(/^\//, "")}`;
}
