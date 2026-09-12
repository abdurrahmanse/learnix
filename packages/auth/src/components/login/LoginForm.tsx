"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LogIn, KeyRound } from "lucide-react"

import { loginSchema } from "@learnix/utils"
import { AuthCardHeader } from "../AuthCardHeader"
import { Form, Link, CardContent } from "@learnix/ui";
import { SubmitAuthButton } from "../common/SubmitAuthButton"
import { useLoginMutation } from "../../hooks/useAuthMutations"
import { LoginFormFields } from "./LoginFormFields"
import { LoginFooterLinks } from "./LoginFooterLinks"

export function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const loginMutation = useLoginMutation()

  function onSubmit(values: z.infer<typeof loginSchema>) {
    loginMutation.mutate(values)
  }

  const isLoading = loginMutation.isPending

  return (
    <>
      <AuthCardHeader 
        icon={KeyRound} 
        title="Welcome Back" 
        description="Enter your email to sign in to your account" 
      />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <LoginFormFields control={form.control} isLoading={isLoading} />

            <div className="flex justify-end mb-1">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <SubmitAuthButton
              isLoading={isLoading}
              loadingText="Signing in..."
              defaultText="Sign in"
              icon={LogIn}
              disabled={isLoading}
            />
          </form>
        </Form>
      </CardContent>
      <LoginFooterLinks />
    </>
  )
}
