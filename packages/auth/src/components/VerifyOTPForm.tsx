"use client"

import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Mail } from "lucide-react"

import { OTPInputGroup } from "./common/OTPInputGroup";
import { SubmitAuthButton } from "./common/SubmitAuthButton";
import { useVerifyRegistrationMutation } from "../hooks/useAuthMutations";

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
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Check your email</h1>
        <p className="text-muted-foreground">
          We've sent a 6-digit verification code to <br/>
          <span className="font-medium text-foreground">{email}</span>
        </p>
      </div>

      <form onSubmit={handleVerifyOTP} className="space-y-6 flex flex-col items-center">
        <OTPInputGroup value={otp} onChange={(value: string) => setOtp(value)} disabled={isLoading} />

        <div className="w-full">
          <SubmitAuthButton
            isLoading={isLoading}
            loadingText="Verifying..."
            defaultText="Verify Account"
            disabled={otp.length !== 6 || isLoading || isSuccess}
          />
        </div>
      </form>

      <div className="flex flex-col space-y-4 pb-8 pt-8 text-center">
        <div className="text-sm text-muted-foreground">
          Didn't receive the code?{" "}
          <button 
            type="button"
            className="font-semibold text-primary hover:underline"
            disabled={isLoading || isSuccess}
            onClick={onGoBack}
          >
            Change email
          </button>
        </div>
      </div>
    </div>
  )
}
