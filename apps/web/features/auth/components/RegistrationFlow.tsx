"use client"

import { useState } from "react"
import { Card } from "@learnix/ui"
import { RegisterForm, VerifyOTPForm } from "@learnix/auth"

export function RegistrationFlow() {
  const [step, setStep] = useState<'register' | 'otp'>('register')
  const [email, setEmail] = useState('')

  return (
    <div className="w-full relative">
      <div className="absolute -top-6 left-0 w-full h-1 bg-muted rounded-full overflow-hidden">
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
    </div>
  )
}
