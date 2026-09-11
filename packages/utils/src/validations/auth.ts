import * as z from "zod"

export const emailField = z.string().email({
  message: "Please enter a valid email address.",
})

export const passwordField = z.string().min(8, {
  message: "Password must be at least 8 characters long.",
})

export const loginSchema = z.object({
  email: emailField,
  password: z.string().min(1, {
    message: "Password is required.",
  }),
})

export const registerSchema = z.object({
  email: emailField,
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  full_name: z.string().min(1, {
    message: "Full name is required.",
  }),
  password: passwordField,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})

export const emailSchema = z.object({
  email: emailField,
})

export const resetSchema = z.object({
  password: passwordField,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})
