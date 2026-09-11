"use client"

import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Mail } from "lucide-react"

import { CardContent, CardFooter } from "@learnix/ui"
import { AuthCardHeader } from "./AuthCardHeader"
import { SubmitAuthButton } from "@/features/core/components/common/SubmitAuthButton"
import { OTPInputGroup } from "@/features/core/components/common/OTPInputGroup"
import { useVerifyRegistrationMutation } from "@/features/auth/hooks/useAuthMutations"

interface VerifyOTPFormProps {
  email: string;
  onGoBack: () => void;
}

export function VerifyOTPForm({ email, onGoBack }: VerifyOTPFormProps) {
  const router = useRouter()
  const [otp, setOtp] = useState('')

  const verifyMutation = useVerifyRegistrationMutation(() => {
    toast.success("Account successfully verified and created! Redirecting...")
    setTimeout(() => router.push("/login"), 1000)
  })

  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit code")
      return
    }

    verifyMutation.mutate({ email, otp_code: otp })
  }

  const isLoading = verifyMutation.isPending
  const isSuccess = verifyMutation.isSuccess

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <AuthCardHeader
        icon={Mail}
        title="Check your email"
        description={
          <>
            We&apos;ve sent a 6-digit verification code to <br/>
            <span className="font-medium text-foreground">{email}</span>
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
            onClick={onGoBack}
          >
            Change email
          </button>
        </div>
      </CardFooter>
    </div>
  )
}
