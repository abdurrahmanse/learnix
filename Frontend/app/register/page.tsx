"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { UserPlus, Mail, Lock, KeyRound, ArrowRight, CheckCircle2, User, AtSign } from "lucide-react"

const registerSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  full_name: z.string().min(1, {
    message: "Full name is required.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
})

export default function RegisterPage() {
  const router = useRouter()

  const [step, setStep] = useState<'form' | 'otp'>('form')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
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

  // Submit initial form (Step 1)
  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setIsLoading(true)
    setError(null)
    
    try {
      await authService.register({
        email: values.email,
        username: values.username,
        full_name: values.full_name,
        password: values.password
      })
      setStep('otp')
    } catch (err) {
      setError(handleApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  // Verify OTP (Step 2)
  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit code.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      await authService.verifyRegistration({
        email: form.getValues().email,
        otp_code: otp
      })
      setSuccess("Account successfully verified and created! Redirecting...")
      setTimeout(() => router.push("/login"), 1500)
    } catch (err) {
      setError(handleApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      
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
            <CardHeader className="space-y-2 text-center pb-8 pt-10">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-4xl font-extrabold tracking-tight">Create an account</CardTitle>
              <CardDescription className="text-base font-light">
                Enter your details to sign up
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
                            <Input type="password" placeholder="Password" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading} />
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
                            <Input type="password" placeholder="Confirm Password" className="pl-10 h-12 rounded-xl" {...field} disabled={isLoading} />
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
            <CardHeader className="space-y-2 text-center pb-8 pt-10">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-4xl font-extrabold tracking-tight">Check your email</CardTitle>
              <CardDescription className="text-base font-light">
                We&apos;ve sent a 6-digit verification code to <br/>
                <span className="font-medium text-foreground">{form.getValues().email}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerifyOTP} className="space-y-6 flex flex-col items-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  disabled={isLoading || !!success}
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

                {error && (
                  <div className="p-3 w-full text-center text-sm font-medium text-destructive-foreground bg-destructive/10 rounded-md">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="p-3 w-full text-center text-sm font-medium text-emerald-800 bg-emerald-100 rounded-md dark:text-emerald-200 dark:bg-emerald-900/30 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    {success}
                  </div>
                )}

                <Button className="w-full h-12 rounded-xl" type="submit" disabled={isLoading || otp.length !== 6 || !!success}>
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
                  disabled={isLoading || !!success}
                  onClick={() => setStep('form')} // Allow going back to check email
                >
                  Change email
                </button>
              </div>
            </CardFooter>
          </div>
        )}
      </Card>
    </div>
  )
}
