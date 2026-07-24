"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, KeyRound, UserPlus, AtSign, User } from "lucide-react"

import { Form } from "@/components/ui/form"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { registerSchema } from "@/lib/validations/auth"
import { AuthWrapper } from "@/components/layout/AuthWrapper"
import { AuthCardHeader } from "@/components/layout/AuthCardHeader"
import { FormInputWithIcon } from "@/components/common/FormInputWithIcon"
import { SubmitAuthButton } from "@/components/common/SubmitAuthButton"
import { OTPInputGroup } from "@/components/common/OTPInputGroup"
import { useRegisterMutation, useVerifyRegistrationMutation } from "@/features/auth/hooks/useAuthMutations"

import { GuestGuard } from "@/features/auth/components/GuestGuard"

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState<'register' | 'otp'>('register')
  const [otp, setOtp] = useState('')

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

  const registerMutation = useRegisterMutation(() => setStep('otp'))
  const verifyMutation = useVerifyRegistrationMutation(() => {
    toast.success("Account successfully verified and created! Redirecting...")
    setTimeout(() => router.push("/login"), 1000)
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    registerMutation.mutate(values)
  }

  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code")
      return
    }

    verifyMutation.mutate({ email: form.getValues().email, otp_code: otp })
  }

  const isLoading = registerMutation.isPending || verifyMutation.isPending
  const isSuccess = verifyMutation.isSuccess

  return (
    <GuestGuard>
      <AuthWrapper>
        <Card className="w-full max-w-md shadow-2xl shadow-primary/5 border-border/40 bg-background/60 backdrop-blur-xl rounded-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: step === 'register' ? '50%' : '100%' }}
          />
        </div>

        {step === 'register' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <AuthCardHeader
              icon={UserPlus}
              title="Create an account"
              description="Enter your details to sign up"
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
                    name="username"
                    icon={AtSign}
                    placeholder="Username"
                    disabled={isLoading}
                  />
                  <FormInputWithIcon
                    control={form.control}
                    name="full_name"
                    icon={User}
                    placeholder="Full Name"
                    disabled={isLoading}
                  />
                  <FormInputWithIcon
                    control={form.control}
                    name="password"
                    icon={KeyRound}
                    placeholder="Password"
                    type="password"
                    disabled={isLoading}
                  />
                  <FormInputWithIcon
                    control={form.control}
                    name="confirmPassword"
                    icon={KeyRound}
                    placeholder="Confirm Password"
                    type="password"
                    disabled={isLoading}
                  />
                  <SubmitAuthButton
                    isLoading={isLoading}
                    loadingText="Creating account..."
                    defaultText="Create Account"
                    icon={UserPlus}
                    disabled={isLoading}
                  />
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
                <OTPInputGroup value={otp} onChange={(value) => setOtp(value)} disabled={isLoading} />

                <SubmitAuthButton
                  isLoading={isLoading}
                  loadingText="Verifying..."
                  defaultText="Verify Account"
                  disabled={otp.length !== 6 || isLoading || isSuccess}
                />
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pb-8">
              <div className="text-sm text-center text-muted-foreground">
                Didn&apos;t receive the code?{" "}
                <button 
                  type="button"
                  className="font-semibold text-primary hover:underline"
                  disabled={isLoading || isSuccess}
                  onClick={() => setStep('register')}
                >
                  Change email
                </button>
              </div>
            </CardFooter>
          </div>
        )}
      </Card>
      </AuthWrapper>
    </GuestGuard>
  )
}
