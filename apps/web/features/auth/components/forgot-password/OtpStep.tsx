import { Mail, ArrowLeft } from "lucide-react";
import { CardContent, CardFooter } from "@learnix/ui";
import { AuthCardHeader, SubmitAuthButton, OTPInputGroup } from "@learnix/auth";

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
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <AuthCardHeader
        icon={Mail}
        title="Check your email"
        description={<>We&apos;ve sent a 6-digit reset code to <br /><span className="font-medium text-foreground">{email}</span></>}
      />
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6 flex flex-col items-center">
          <OTPInputGroup value={otp} onChange={setOtp} disabled={isLoading} />
          <SubmitAuthButton isLoading={isLoading} loadingText="Verifying..." defaultText="Verify Code" disabled={otp.length !== 6 || isLoading} />
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pb-8">
        <div className="text-sm text-center text-muted-foreground">
          <button type="button" className="font-semibold text-primary hover:underline inline-flex items-center" disabled={isLoading} onClick={onBack}>
            <ArrowLeft className="mr-1 h-3 w-3" /> Use a different email
          </button>
        </div>
      </CardFooter>
    </div>
  );
}
