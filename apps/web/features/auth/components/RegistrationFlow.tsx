"use client"

import { useState } from "react"
import { Card } from "@learnix/ui"
import { RegisterForm, VerifyOTPForm } from "@learnix/auth"

export function RegistrationFlow() {
  const [step, setStep] = useState<'register' | 'otp'>('register')
  const [email, setEmail] = useState('')

  return (
    <Card className="w-full max-w-[440px] shadow-2xl shadow-black/10 border-white/10 bg-background/50 backdrop-blur-2xl rounded-3xl overflow-hidden ring-1 ring-white/5 dark:bg-black/40 relative">
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
  )
}
