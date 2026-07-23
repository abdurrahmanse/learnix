"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { UserPlus, Mail, Lock, KeyRound, ArrowRight, User, AtSign } from "lucide-react"

import { registerSchema } from "@/lib/validations/auth"
import { AuthWrapper } from "@/components/layout/AuthWrapper"
import { AuthCardHeader } from "@/components/layout/AuthCardHeader"

export default function RegisterPage() {
  const router = useRouter()

  const [step, setStep] = useState<'form' | 'otp'>('form')
  const [otp, setOtp] = useState("")

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      full_name: "",
      password: "",
      confirmPassword: "",
    },
  })

  const registerMutation = useMutation({
    mutationFn: async (values: z.infer<typeof registerSchema>) => {
      return await authService.register({
        email: values.email,
        username: values.username,
        full_name: values.full_name,
        password: values.password
      })
    },
    onSuccess: () => {
      setStep('otp')
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err))
    }
  })

  const verifyMutation = useMutation({
    mutationFn: async (data: { email: string; otp_code: string }) => {
      return await authService.verifyRegistration(data)
    },
    onSuccess: () => {
      toast.success("Account successfully verified and created! Redirecting...")
      setTimeout(() => router.push("/login"), 1500)
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err))
    }
  })

  // Submit initial form (Step 1)
  async function onSubmit(values: z.infer<typeof registerSchema>) {
    registerMutation.mutate(values)
  }

  // Verify OTP (Step 2)
  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code.")
      return
    }

    verifyMutation.mutate({
      email: form.getValues().email,
      otp_code: otp
    })
  }

  const isLoading = registerMutation.isPending || verifyMutation.isPending
  const isSuccess = verifyMutation.isSuccess

  return (
    <AuthWrapper>
      <Card className="w-full max-w-md shadow-2xl shadow-primary/5 border-border/40 bg-background/60 backdrop-blur-xl rounded-2xl overflow-hidden relative">
        {/* Step Indicator Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: step === 'form' ? '50%' : '100%' }}
          />
        </div>

        {step === 'form' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <AuthCardHeader
              icon={UserPlus}
              title="Create an account"
              description="Enter your details to sign up"
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
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <AtSign className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="Username" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="Full Name" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading} />
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
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <KeyRound className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <PasswordInput placeholder="Confirm Password" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-full h-12 rounded-xl mt-4" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      "Sending Code..."
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
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
        ) : (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <AuthCardHeader
              icon={Mail}
              title="Check your email"
              description={
                <>
                  We&apos;ve sent a 6-digit verification code to <br/>
                  <span className="font-medium text-foreground">{form.getValues().email}</span>
                </>
              }
            />
            <CardContent>
              <form onSubmit={handleVerifyOTP} className="space-y-6 flex flex-col items-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  disabled={isLoading || isSuccess}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl" />
                    <InputOTPSlot index={1} className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl" />
                    <InputOTPSlot index={2} className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl" />
                    <InputOTPSlot index={3} className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl" />
                    <InputOTPSlot index={4} className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl" />
                    <InputOTPSlot index={5} className="h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl" />
                  </InputOTPGroup>
                </InputOTP>

                <Button className="w-full h-12 rounded-xl" type="submit" disabled={isLoading || otp.length !== 6 || isSuccess}>
                  {isLoading ? "Verifying..." : "Verify & Create Account"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pb-8">
              <div className="text-sm text-center text-muted-foreground">
                Didn&apos;t receive the code?{" "}
                <button 
                  type="button"
                  className="font-semibold text-primary hover:underline"
                  disabled={isLoading || isSuccess}
                  onClick={() => setStep('form')} // Allow going back to check email
                >
                  Change email
                </button>
              </div>
            </CardFooter>
          </div>
        )}
      </Card>
    </AuthWrapper>
  )
}
