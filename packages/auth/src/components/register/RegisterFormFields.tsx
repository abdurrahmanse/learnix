"use client"

import { Mail, KeyRound, AtSign, User } from "lucide-react"
import { Control } from "react-hook-form"
import { FormInputWithIcon } from "../common/FormInputWithIcon"

import * as z from "zod"
import { registerSchema } from "@learnix/utils"

interface RegisterFormFieldsProps {
  control: Control<z.infer<typeof registerSchema>>
  isLoading: boolean
}

export function RegisterFormFields({ control, isLoading }: RegisterFormFieldsProps) {
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
        name="username"
        icon={AtSign}
        placeholder="Username"
        disabled={isLoading}
      />
      <FormInputWithIcon
        control={control}
        name="full_name"
        icon={User}
        placeholder="Full Name"
        disabled={isLoading}
      />
      <FormInputWithIcon
        control={control}
        name="password"
        icon={KeyRound}
        placeholder="Password"
        type="password"
        disabled={isLoading}
      />
      <FormInputWithIcon
        control={control}
        name="confirmPassword"
        icon={KeyRound}
        placeholder="Confirm Password"
        type="password"
        disabled={isLoading}
      />
    </>
  )
}
