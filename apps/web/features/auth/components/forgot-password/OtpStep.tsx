import { Mail, ArrowLeft } from "lucide-react";
import { SubmitAuthButton, OTPInputGroup } from "@learnix/auth";

interface OtpStepProps {
  email: string;
  otp: string;
  setOtp: (otp: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
  isLoading: boolean;
}

export function OtpStep({ email, otp, setOtp, onSubmit, onBack, isLoading }: OtpStepProps) {
  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-500 mt-6">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Check your email</h1>
        <p className="text-muted-foreground">
          We've sent a 6-digit reset code to <br/>
          <span className="font-medium text-foreground">{email}</span>
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 flex flex-col items-center">
        <OTPInputGroup value={otp} onChange={setOtp} disabled={isLoading} />
        <div className="w-full">
          <SubmitAuthButton isLoading={isLoading} loadingText="Verifying..." defaultText="Verify Code" disabled={otp.length !== 6 || isLoading} />
        </div>
      </form>

      <div className="flex flex-col space-y-4 pb-8 pt-8 text-center">
        <div className="text-sm text-muted-foreground">
          <button type="button" className="font-semibold text-primary hover:underline inline-flex items-center" disabled={isLoading} onClick={onBack}>
            <ArrowLeft className="mr-1 h-3 w-3" /> Use a different email
          </button>
        </div>
      </div>
    </div>
  );
}
