"use client"

import { useState } from "react"
import { Card } from "@learnix/ui"
import { AuthWrapper } from "@/features/auth/components/AuthWrapper"
import { GuestGuard } from "@/features/auth/components/GuestGuard"
import { RegisterForm } from "@/features/auth/components/RegisterForm"
import { VerifyOTPForm } from "@/features/auth/components/VerifyOTPForm"

export default function RegisterPage() {
  const [step, setStep] = useState<'register' | 'otp'>('register')
  const [email, setEmail] = useState('')

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
            <RegisterForm 
              defaultEmail={email}
              onEmailChange={setEmail}
              onSuccess={() => setStep('otp')} 
            />
          ) : (
            <VerifyOTPForm 
              email={email} 
              onGoBack={() => setStep('register')} 
            />
          )}
        </Card>
      </AuthWrapper>
    </GuestGuard>
  )
}
