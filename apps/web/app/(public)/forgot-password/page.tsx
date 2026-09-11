"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Mail, KeyRound, ArrowLeft, Lock, ArrowRight } from "lucide-react";
import { Form, Card, CardContent, CardFooter, Link } from "@learnix/ui";
import { emailSchema, resetSchema } from "@learnix/utils";
import { AuthWrapper } from "@learnix/auth";
import { AuthCardHeader } from "@/features/auth/components/AuthCardHeader";
import { FormInputWithIcon } from "@/features/core/components/common/FormInputWithIcon";
import { SubmitAuthButton } from "@/features/core/components/common/SubmitAuthButton";
import { OTPInputGroup } from "@/features/core/components/common/OTPInputGroup";
import { GuestGuard } from "@learnix/auth";
import { StepProgressBar } from "@/features/auth/components/StepProgressBar";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/features/auth/hooks/useAuthMutations";

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
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <AuthCardHeader
                icon={KeyRound}
                title="Reset Password"
                description="Enter your email address to receive a verification code."
              />
              <CardContent>
                <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit((v) => emailMutation.mutate(v))} className="space-y-4">
                    <FormInputWithIcon control={emailForm.control} name="email" icon={Mail} placeholder="Email Address" type="email" disabled={isLoading} />
                    <SubmitAuthButton isLoading={isLoading} loadingText="Sending Code..." defaultText="Send Reset Code" icon={ArrowRight} iconPosition="right" disabled={isLoading} />
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

          {/* Step 2 — OTP */}
          {step === "otp" && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <AuthCardHeader
                icon={Mail}
                title="Check your email"
                description={<>We&apos;ve sent a 6-digit reset code to <br /><span className="font-medium text-foreground">{emailForm.getValues().email}</span></>}
              />
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (otp.length !== 6) { toast.error("Please enter a valid 6-digit code."); return; }
                    setStep("reset");
                  }}
                  className="space-y-6 flex flex-col items-center"
                >
                  <OTPInputGroup value={otp} onChange={setOtp} disabled={isLoading} />
                  <SubmitAuthButton isLoading={isLoading} loadingText="Verifying..." defaultText="Verify Code" disabled={otp.length !== 6 || isLoading} />
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 pb-8">
                <div className="text-sm text-center text-muted-foreground">
                  <button type="button" className="font-semibold text-primary hover:underline inline-flex items-center" disabled={isLoading} onClick={() => setStep("email")}>
                    <ArrowLeft className="mr-1 h-3 w-3" /> Use a different email
                  </button>
                </div>
              </CardFooter>
            </div>
          )}

          {/* Step 3 — New Password */}
          {step === "reset" && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <AuthCardHeader icon={Lock} title="Set New Password" description="Please enter your new password below." />
              <CardContent>
                <Form {...resetForm}>
                  <form onSubmit={resetForm.handleSubmit((v) => resetMutation.mutate({ email: emailForm.getValues().email, otp_code: otp, new_password: v.password }))} className="space-y-4">
                    <FormInputWithIcon control={resetForm.control} name="password" icon={Lock} placeholder="New Password" type="password" disabled={isLoading || isSuccess} />
                    <FormInputWithIcon control={resetForm.control} name="confirmPassword" icon={KeyRound} placeholder="Confirm New Password" type="password" disabled={isLoading || isSuccess} />
                    <SubmitAuthButton isLoading={isLoading} loadingText="Resetting Password..." defaultText="Reset Password" disabled={isLoading || isSuccess} />
                  </form>
                </Form>
              </CardContent>
            </div>
          )}
        </Card>
      </AuthWrapper>
    </GuestGuard>
  );
}
