"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { LogIn, Mail, Lock, KeyRound } from "lucide-react"

import { loginSchema } from "@/lib/validations/auth"
import { AuthWrapper } from "@/components/layout/AuthWrapper"
import { AuthCardHeader } from "@/components/layout/AuthCardHeader"
import { Form } from "@/components/ui/form"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { FormInputWithIcon } from "@/components/common/FormInputWithIcon"
import { SubmitAuthButton } from "@/components/common/SubmitAuthButton"
import { useLoginMutation } from "@/features/auth/hooks/useAuthMutations"
import { GuestGuard } from "@/features/auth/components/GuestGuard"

export default function LoginPage() {
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
    <GuestGuard>
      <AuthWrapper>
        <Card className="w-full max-w-md shadow-2xl shadow-primary/5 border-border/40 bg-background/60 backdrop-blur-xl rounded-2xl">
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
      </Card>
    </AuthWrapper>
    </GuestGuard>
  )
}
