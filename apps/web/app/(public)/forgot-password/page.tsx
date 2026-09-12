"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card } from "@learnix/ui";
import { emailSchema, resetSchema } from "@learnix/utils";
import { 
  AuthWrapper, 
  GuestGuard, 
  StepProgressBar, 
  useForgotPasswordMutation, 
  useResetPasswordMutation 
} from "@learnix/auth";
import { EmailStep } from "@/features/auth/components/forgot-password/EmailStep";
import { OtpStep } from "@/features/auth/components/forgot-password/OtpStep";
import { ResetStep } from "@/features/auth/components/forgot-password/ResetStep";

type Step = "email" | "otp" | "reset";

const stepWidths: Record<Step, string> = {
  email: "33%",
  otp: "66%",
  reset: "100%",
};

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [otp, setOtp] = useState("");

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const resetForm = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const emailMutation = useForgotPasswordMutation(() => setStep("otp"));
  const resetMutation = useResetPasswordMutation(() => {
    toast.success("Password successfully reset! Redirecting to login...");
    setTimeout(() => router.push("/login"), 1500);
  });

  const isLoading = emailMutation.isPending || resetMutation.isPending;
  const isSuccess = resetMutation.isSuccess;

  return (
    <GuestGuard>
      <AuthWrapper>
        <Card className="w-full max-w-md shadow-2xl shadow-primary/5 border-border/40 bg-background/60 backdrop-blur-xl rounded-2xl relative overflow-hidden">
          <StepProgressBar width={stepWidths[step]} />

          {/* Step 1 — Email */}
          {step === "email" && (
            <EmailStep 
              form={emailForm} 
              onSubmit={(v) => emailMutation.mutate(v)} 
              isLoading={isLoading} 
            />
          )}

          {/* Step 2 — OTP */}
          {step === "otp" && (
            <OtpStep 
              email={emailForm.getValues().email}
              otp={otp}
              setOtp={setOtp}
              onSubmit={(e) => {
                e.preventDefault();
                if (otp.length !== 6) { toast.error("Please enter a valid 6-digit code."); return; }
                setStep("reset");
              }}
              onBack={() => setStep("email")}
              isLoading={isLoading}
            />
          )}

          {/* Step 3 — New Password */}
          {step === "reset" && (
            <ResetStep 
              form={resetForm}
              onSubmit={(v) => resetMutation.mutate({ email: emailForm.getValues().email, otp_code: otp, new_password: v.password })}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />
          )}
        </Card>
      </AuthWrapper>
    </GuestGuard>
  );
}
