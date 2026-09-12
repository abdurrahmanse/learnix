"use client"

import { Mail, Lock } from "lucide-react"
import { Control } from "react-hook-form"
import { FormInputWithIcon } from "../common/FormInputWithIcon"

import * as z from "zod"
import { loginSchema } from "@learnix/utils"

interface LoginFormFieldsProps {
  control: Control<z.infer<typeof loginSchema>>
  isLoading: boolean
}

export function LoginFormFields({ control, isLoading }: LoginFormFieldsProps) {
  return (
    <>
      <FormInputWithIcon
        control={control}
        name="email"
        icon={Mail}
        placeholder="Email Address"
        type="email"
        disabled={isLoading}
      />
      <FormInputWithIcon
        control={control}
        name="password"
        icon={Lock}
        placeholder="Password"
        type="password"
        disabled={isLoading}
      />
    </>
  )
}
