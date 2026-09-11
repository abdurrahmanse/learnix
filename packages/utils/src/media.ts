/**
 * Converts a relative media path to an absolute URL.
 * Cloudinary URLs are returned as-is.
 * Relative paths are prefixed with the API base URL root.
 */
export function getMediaUrl(path: string | undefined): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  // Remove /api/v1 from the end of baseUrl if it exists
  const rootUrl = baseUrl.replace(/\/api\/v1\/?$/, "");

  return `${rootUrl}/${path.replace(/^\//, "")}`;
}
