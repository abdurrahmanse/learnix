"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "@/store/authStore"
import { authService, handleApiError } from "@/lib/api/auth"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { LogIn, Mail, Lock, KeyRound } from "lucide-react"

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
})

export default function LoginPage() {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const loginMutation = useMutation({
    mutationFn: async (values: z.infer<typeof loginSchema>) => {
      return await authService.login(values.email, values.password)
    },
    onSuccess: async (data) => {
      setSuccess("Successfully logged in! Redirecting...")
      setError(null)
      
      try {
        const userResponse = await authService.getMe()
        setAuth(userResponse, data.access_token)
        
        setTimeout(() => {
          router.push("/")
        }, 1000)
      } catch {
        setAuth({ id: "temp", email: form.getValues().email, username: "", full_name: "", role: "student", is_active: true }, data.access_token)
        setTimeout(() => router.push("/"), 1000)
      }
    },
    onError: (err: unknown) => {
      setSuccess(null)
      setError(handleApiError(err))
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    loginMutation.mutate(values)
  }

  const isLoading = loginMutation.isPending

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      <Card className="w-full max-w-md shadow-2xl shadow-primary/5 border-border/40 bg-background/60 backdrop-blur-xl rounded-2xl">
        <CardHeader className="space-y-2 text-center pb-8 pt-8">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <KeyRound className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-4xl font-extrabold tracking-tight">Welcome Back</CardTitle>
          <CardDescription>
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Email Address" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-end mb-1">
                      <Link
                        href="/forgot-password"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                        <PasswordInput placeholder="Password" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && (
                <div className="p-3 text-sm font-medium text-destructive-foreground bg-destructive/10 rounded-md">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="p-3 text-sm font-medium text-emerald-800 bg-emerald-100 rounded-md dark:text-emerald-200 dark:bg-emerald-900/30">
                  {success}
                </div>
              )}

              <Button className="w-full h-12 rounded-xl mt-4" type="submit" disabled={isLoading}>
                {isLoading ? (
                  "Signing in..."
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign in
                  </>
                )}
              </Button>
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
    </div>
  )
}
