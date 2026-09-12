import { z } from "zod";

export const setupSchema = z.object({
  database_url: z.string().min(1, "Database URL is required"),
  redis_url: z.string().min(1, "Redis URL is required"),
  admin_username: z.string().min(1, "Username is required"),
  admin_email: z.string().email("Invalid email address").min(1, "Email is required"),
  admin_password: z.string().min(8, "Password must be at least 8 characters"),
  admin_full_name: z.string().optional(),
  cloudinary_cloud_name: z.string().optional(),
  cloudinary_api_key: z.string().optional(),
  cloudinary_api_secret: z.string().optional(),
  resend_api_key: z.string().optional(),
  sentry_dsn: z.string().optional(),
});

export type SetupFormData = z.infer<typeof setupSchema>;

export const defaultSetupValues: Partial<SetupFormData> = {
  database_url: "postgresql+asyncpg://postgres:postgres@localhost:5432/learnix",
  redis_url: "redis://localhost:6379/0",
  admin_username: "admin",
  admin_email: "admin@learnix.com",
};
