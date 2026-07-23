"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
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
import { Card, CardContent, CardFooter } from "@/components/ui/card"

import { LogIn, Mail, Lock, KeyRound } from "lucide-react"

import { loginSchema } from "@/lib/validations/auth"
import { AuthWrapper } from "@/components/layout/AuthWrapper"
import { AuthCardHeader } from "@/components/layout/AuthCardHeader"


export default function LoginPage() {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)

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
      toast.success("Successfully logged in! Redirecting...")
      
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
      toast.error(handleApiError(err))
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    loginMutation.mutate(values)
  }

  const isLoading = loginMutation.isPending

  return (
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
    </AuthWrapper>
  )
}
