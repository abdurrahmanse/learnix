import * as z from "zod";

export const courseFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(255),
  short_summary: z.string().max(500).optional(),
  description: z.string().optional(),
  thumbnail_url: z.string().url().optional().or(z.literal("")),
  thumbnail_public_id: z.string().optional().or(z.literal("")),
  price: z.number().min(0, "Price must be a positive number"),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  status: z.enum(["draft", "published", "archived"]),
});

export type CourseFormValues = z.infer<typeof courseFormSchema>;
