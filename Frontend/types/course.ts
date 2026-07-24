export type CourseLevel = "beginner" | "intermediate" | "advanced";
export type CourseStatus = "draft" | "published" | "archived";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description?: string;
  short_summary?: string;
  thumbnail_url?: string;
  price: number;
  level: CourseLevel;
  status: CourseStatus;
  instructor_id?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
}
