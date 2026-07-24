import * as z from "zod";

export const changePasswordSchema = z.object({
  current_password: z.string().min(1, "Current password is required"),
  new_password: z.string().min(8, "Password must be at least 8 characters"),
  confirm_password: z.string()
}).refine((data) => data.new_password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
});

export type ChangePasswordValues = z.infer<typeof changePasswordSchema>;

export const updateProfileSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters."),
  bio: z.string().max(160, "Bio must not be longer than 160 characters.").optional().or(z.literal("")),
  location: z.string().max(50, "Location is too long.").optional().or(z.literal("")),
  phone_number: z.string().max(20, "Phone number is too long.").optional().or(z.literal("")),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
