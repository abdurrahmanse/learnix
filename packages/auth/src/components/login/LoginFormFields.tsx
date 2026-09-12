"use client"

import { Mail, KeyRound, LucideIcon } from "lucide-react"
import { Control, FieldPath } from "react-hook-form"
import { FormInput } from "@learnix/ui"

import * as z from "zod"
import { loginSchema } from "@learnix/utils"

type LoginSchemaType = z.infer<typeof loginSchema>

interface LoginFormFieldsProps {
  control: Control<LoginSchemaType>
  isLoading: boolean
}

interface FieldConfig {
  name: FieldPath<LoginSchemaType>
  icon: LucideIcon
  placeholder: string
  type?: "text" | "password" | "email"
}

const LOGIN_FIELDS: FieldConfig[] = [
  { name: "email", icon: Mail, placeholder: "Email Address", type: "email" },
  { name: "password", icon: KeyRound, placeholder: "Password", type: "password" },
]

export function LoginFormFields({ control, isLoading }: LoginFormFieldsProps) {
  return (
    <>
      {LOGIN_FIELDS.map((field) => (
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
