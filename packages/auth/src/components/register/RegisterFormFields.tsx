"use client"

import { Mail, KeyRound, AtSign, User, LucideIcon } from "lucide-react"
import { Control, FieldPath } from "react-hook-form"
import { FormInput } from "@learnix/ui"

import * as z from "zod"
import { registerSchema } from "@learnix/utils"

type RegisterSchemaType = z.infer<typeof registerSchema>

interface RegisterFormFieldsProps {
  control: Control<RegisterSchemaType>
  isLoading: boolean
}

interface FieldConfig {
  name: FieldPath<RegisterSchemaType>
  icon: LucideIcon
  placeholder: string
  type?: "text" | "password" | "email"
}

const REGISTER_FIELDS: FieldConfig[] = [
  { name: "email", icon: Mail, placeholder: "Email Address", type: "email" },
  { name: "username", icon: AtSign, placeholder: "Username", type: "text" },
  { name: "full_name", icon: User, placeholder: "Full Name", type: "text" },
  { name: "password", icon: KeyRound, placeholder: "Password", type: "password" },
  { name: "confirmPassword", icon: KeyRound, placeholder: "Confirm Password", type: "password" },
]

export function RegisterFormFields({ control, isLoading }: RegisterFormFieldsProps) {
  return (
    <>
      {REGISTER_FIELDS.map((field) => (
        <FormInput
          key={field.name}
          control={control}
          name={field.name}
          icon={field.icon}
          placeholder={field.placeholder}
          type={field.type}
          disabled={isLoading}
        />
      ))}
    </>
  )
}
