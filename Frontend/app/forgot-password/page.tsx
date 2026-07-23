"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Form } from "@/components/ui/form"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

import { Mail, KeyRound, ArrowLeft, Lock, ArrowRight } from "lucide-react"

import { emailSchema, resetSchema } from "@/lib/validations/auth"
import { AuthWrapper } from "@/components/layout/AuthWrapper"
import { AuthCardHeader } from "@/components/layout/AuthCardHeader"
import { FormInputWithIcon } from "@/components/common/FormInputWithIcon"
import { SubmitAuthButton } from "@/components/common/SubmitAuthButton"
import { OTPInputGroup } from "@/components/common/OTPInputGroup"
import { useForgotPasswordMutation, useResetPasswordMutation } from "@/features/auth/hooks/useAuthMutations"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email')
  const [otp, setOtp] = useState('')

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  })

  const resetForm = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: { password: "", confirmPassword: "" },
  })

  const emailMutation = useForgotPasswordMutation(() => setStep('otp'))
  const resetMutation = useResetPasswordMutation(() => {
    toast.success("Password successfully reset! Redirecting to login...")
    setTimeout(() => router.push("/login"), 1500)
  })

  async function onSubmitEmail(values: z.infer<typeof emailSchema>) {
    emailMutation.mutate(values)
  }

  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code.")
      return
    }
    setStep('reset')
  }

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
    <AuthWrapper>
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
            <AuthCardHeader
              icon={KeyRound}
              title="Reset Password"
              description="Enter your email address to receive a verification code."
            />
            <CardContent>
              <Form {...emailForm}>
                <form onSubmit={emailForm.handleSubmit(onSubmitEmail)} className="space-y-4">
                  <FormInputWithIcon
                    control={emailForm.control}
                    name="email"
                    icon={Mail}
                    placeholder="Email Address"
                    type="email"
                    disabled={isLoading}
                  />

                  <SubmitAuthButton
                    isLoading={isLoading}
                    loadingText="Sending Code..."
                    defaultText="Send Reset Code"
                    icon={ArrowRight}
                    iconPosition="right"
                    disabled={isLoading}
                  />
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
            <AuthCardHeader
              icon={Mail}
              title="Check your email"
              description={
                <>
                  We&apos;ve sent a 6-digit reset code to <br/>
                  <span className="font-medium text-foreground">{emailForm.getValues().email}</span>
                </>
              }
            />
            <CardContent>
              <form onSubmit={handleVerifyOTP} className="space-y-6 flex flex-col items-center">
                <OTPInputGroup value={otp} onChange={(value) => setOtp(value)} disabled={isLoading} />

                <SubmitAuthButton
                  isLoading={isLoading}
                  loadingText="Verifying..."
                  defaultText="Verify Code"
                  disabled={otp.length !== 6 || isLoading}
                />
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
             <AuthCardHeader
              icon={Lock}
              title="Set New Password"
              description="Please enter your new password below."
            />
            <CardContent>
              <Form {...resetForm}>
                <form onSubmit={resetForm.handleSubmit(onSubmitReset)} className="space-y-4">
                  <FormInputWithIcon
                    control={resetForm.control}
                    name="password"
                    icon={Lock}
                    placeholder="New Password"
                    type="password"
                    disabled={isLoading || isSuccess}
                  />

                  <FormInputWithIcon
                    control={resetForm.control}
                    name="confirmPassword"
                    icon={KeyRound}
                    placeholder="Confirm New Password"
                    type="password"
                    disabled={isLoading || isSuccess}
                  />

                  <SubmitAuthButton
                    isLoading={isLoading}
                    loadingText="Resetting Password..."
                    defaultText="Reset Password"
                    disabled={isLoading || isSuccess}
                  />
                </form>
              </Form>
            </CardContent>
          </div>
        )}
      </Card>
    </AuthWrapper>
  )
}
