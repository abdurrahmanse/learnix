"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LogIn } from "lucide-react"

import { loginSchema } from "@learnix/utils"
import { 
  Form, 
  Link, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  FormInput
} from "@learnix/ui"
import { SubmitAuthButton } from "../common/SubmitAuthButton"
import { useLoginMutation } from "../../hooks/useAuthMutations"
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
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">Welcome Back</CardTitle>
        <CardDescription>
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4 py-2">
            <FormInput
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="m@example.com"
              type="email"
              disabled={isLoading}
            />
            
            <div className="space-y-1">
              <FormInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                disabled={isLoading}
              />
              <div className="flex justify-end pt-1">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
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
      
      <CardFooter className="flex flex-col gap-4 text-center text-sm text-muted-foreground">
        <LoginFooterLinks />
      </CardFooter>
    </Card>
  )
}
