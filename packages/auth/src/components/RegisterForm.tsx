"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Mail, KeyRound, UserPlus, AtSign, User } from "lucide-react"

import { Form, Link } from "@learnix/ui";
import { CardContent, CardFooter } from "@learnix/ui"
import { registerSchema } from "@learnix/utils"
import { AuthCardHeader } from "./AuthCardHeader"
import { FormInputWithIcon } from "./common/FormInputWithIcon"
import { SubmitAuthButton } from "./common/SubmitAuthButton"
import { useRegisterMutation } from "../hooks/useAuthMutations"

interface RegisterFormProps {
  onSuccess: () => void;
  defaultEmail?: string;
  onEmailChange?: (email: string) => void;
}

export function RegisterForm({ onSuccess, defaultEmail = "", onEmailChange }: RegisterFormProps) {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: defaultEmail,
      username: "",
      full_name: "",
      password: "",
      confirmPassword: "",
    },
  })

  const registerMutation = useRegisterMutation(() => {
    if (onEmailChange) onEmailChange(form.getValues("email"));
    onSuccess();
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    registerMutation.mutate(values)
  }

  const isLoading = registerMutation.isPending

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AuthCardHeader
        icon={UserPlus}
        title="Create an account"
        description="Enter your details to sign up"
      />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputWithIcon
              control={form.control}
              name="email"
              icon={Mail}
              placeholder="Email Address"
              type="email"
              disabled={isLoading}
            />
            <FormInputWithIcon
              control={form.control}
              name="username"
              icon={AtSign}
              placeholder="Username"
              disabled={isLoading}
            />
            <FormInputWithIcon
              control={form.control}
              name="full_name"
              icon={User}
              placeholder="Full Name"
              disabled={isLoading}
            />
            <FormInputWithIcon
              control={form.control}
              name="password"
              icon={KeyRound}
              placeholder="Password"
              type="password"
              disabled={isLoading}
            />
            <FormInputWithIcon
              control={form.control}
              name="confirmPassword"
              icon={KeyRound}
              placeholder="Confirm Password"
              type="password"
              disabled={isLoading}
            />
            <SubmitAuthButton
              isLoading={isLoading}
              loadingText="Creating account..."
              defaultText="Create Account"
              icon={UserPlus}
              disabled={isLoading}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pb-8">
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </div>
  )
}
