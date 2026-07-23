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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { Mail, KeyRound, ArrowLeft, Lock, ArrowRight } from "lucide-react"

const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

const resetSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email')
  const [otp, setOtp] = useState("")

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  })

  const resetForm = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: { password: "", confirmPassword: "" },
  })

  const emailMutation = useMutation({
    mutationFn: async (values: z.infer<typeof emailSchema>) => {
      return await authService.forgotPassword({ email: values.email })
    },
    onSuccess: () => {
      setStep('otp')
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err))
    }
  })

  const resetMutation = useMutation({
    mutationFn: async (data: { email: string; otp_code: string; new_password: string }) => {
      return await authService.resetPassword(data)
    },
    onSuccess: () => {
      toast.success("Password successfully reset! Redirecting to login...")
      setTimeout(() => router.push("/login"), 1500)
    },
    onError: (err: unknown) => {
      toast.error(handleApiError(err))
    }
  })

  // Step 1: Request OTP
  async function onSubmitEmail(values: z.infer<typeof emailSchema>) {
    emailMutation.mutate(values)
  }

  // Step 2: Verify OTP
  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code.")
      return
    }

    // Moving straight to reset form, backend handles actual verification during reset payload
    setStep('reset')
  }

  // Step 3: Reset Password
  async function onSubmitReset(values: z.infer<typeof resetSchema>) {
    resetMutation.mutate({
      email: emailForm.getValues().email,
      otp_code: otp,
      new_password: values.password
    })
  }

  const isLoading = emailMutation.isPending || resetMutation.isPending
  const isSuccess = resetMutation.isSuccess

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      <Card className="w-full max-w-md shadow-2xl shadow-primary/5 border-border/40 bg-background/60 backdrop-blur-xl rounded-2xl relative overflow-hidden">
        
        {/* Step Indicator Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: step === 'email' ? '33%' : step === 'otp' ? '66%' : '100%' }}
          />
        </div>

        {step === 'email' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="space-y-2 text-center pb-8 pt-10">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <KeyRound className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-4xl font-extrabold tracking-tight">Reset Password</CardTitle>
              <CardDescription className="text-base font-light">
                Enter your email address to receive a verification code.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...emailForm}>
                <form onSubmit={emailForm.handleSubmit(onSubmitEmail)} className="space-y-4">
                  <FormField
                    control={emailForm.control}
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

                  <Button className="w-full h-12 rounded-xl mt-4" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      "Sending..."
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
                Remembered your password?{" "}
                <Link href="/login" className="font-semibold text-primary hover:underline inline-flex items-center">
                  <ArrowLeft className="mr-1 h-3 w-3" /> Back to login
                </Link>
              </div>
            </CardFooter>
          </div>
        )}

        {step === 'otp' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <CardHeader className="space-y-2 text-center pb-8 pt-10">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-4xl font-extrabold tracking-tight">Check your email</CardTitle>
              <CardDescription className="text-base font-light">
                We&apos;ve sent a 6-digit reset code to <br/>
                <span className="font-medium text-foreground">{emailForm.getValues().email}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerifyOTP} className="space-y-6 flex flex-col items-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  disabled={isLoading}
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

                <Button className="w-full h-12 rounded-xl" type="submit" disabled={isLoading || otp.length !== 6}>
                  {isLoading ? "Verifying..." : "Verify Code"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pb-8">
              <div className="text-sm text-center text-muted-foreground">
                <button 
                  type="button"
                  className="font-semibold text-primary hover:underline inline-flex items-center"
                  disabled={isLoading}
                  onClick={() => setStep('email')} 
                >
                  <ArrowLeft className="mr-1 h-3 w-3" /> Use a different email
                </button>
              </div>
            </CardFooter>
          </div>
        )}

        {step === 'reset' && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
             <CardHeader className="space-y-2 text-center pb-8 pt-10">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-4xl font-extrabold tracking-tight">Set New Password</CardTitle>
              <CardDescription className="text-base font-light">
                Please enter your new password below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...resetForm}>
                <form onSubmit={resetForm.handleSubmit(onSubmitReset)} className="space-y-4">
                  <FormField
                    control={resetForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <PasswordInput placeholder="New Password" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading || isSuccess} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={resetForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <KeyRound className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <PasswordInput placeholder="Confirm New Password" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading || isSuccess} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-full h-12 rounded-xl mt-4" type="submit" disabled={isLoading || isSuccess}>
                    {isLoading ? (
                      "Resetting Password..."
                    ) : (
                      "Reset Password"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </div>
        )}
      </Card>
    </div>
  )
}
