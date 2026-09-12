import { ArrowLeft } from "lucide-react";
import { SubmitAuthButton, OTPInputGroup } from "@learnix/auth";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@learnix/ui";

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
    <Card className="w-full max-w-md mx-auto shadow-md animate-in fade-in slide-in-from-right-8 duration-500 mt-6">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">Check your email</CardTitle>
        <CardDescription>
          We've sent a 6-digit verification code to <br/>
          <span className="font-medium text-foreground">{email}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col items-center px-4 py-2">
          <OTPInputGroup 
            value={otp} 
            onChange={setOtp} 
            disabled={isLoading}
          />
          <div className="w-full mt-8">
            <SubmitAuthButton 
              isLoading={isLoading} 
              loadingText="Verifying..." 
              defaultText="Verify Code" 
              disabled={otp.length !== 6 || isLoading} 
            />
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
        <button 
          onClick={onBack}
          type="button"
          className="flex items-center justify-center gap-2 hover:text-primary transition-colors disabled:opacity-50"
          disabled={isLoading}
        >
          <ArrowLeft className="h-4 w-4" />
          Use a different email
        </button>
      </CardFooter>
    </Card>
  );
}
