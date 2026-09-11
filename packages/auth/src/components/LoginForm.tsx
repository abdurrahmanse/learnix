"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LogIn, Mail, Lock, KeyRound } from "lucide-react"

import { loginSchema } from "@learnix/utils"
import { AuthCardHeader } from "./AuthCardHeader"
import { Form, Link } from "@learnix/ui";
import { CardContent, CardFooter } from "@learnix/ui"
import { FormInputWithIcon } from "@/components/common/FormInputWithIcon"
import { SubmitAuthButton } from "@/components/common/SubmitAuthButton"
import { useLoginMutation } from "@/hooks/useAuthMutations"

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
              name="password"
              icon={Lock}
              placeholder="Password"
              type="password"
              disabled={isLoading}
            />

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
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </>
  )
}
