import { UseFormReturn } from "react-hook-form";
import { CheckCircle2, Lock } from "lucide-react";
import { Form, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@learnix/ui";
import { SubmitAuthButton } from "@learnix/auth";
import { FormInput } from "@learnix/ui";
import * as z from "zod";
import { resetSchema } from "@learnix/utils";

interface ResetStepProps {
  form: UseFormReturn<z.infer<typeof resetSchema>>;
  onSubmit: (data: z.infer<typeof resetSchema>) => void;
  isLoading: boolean;
  isSuccess: boolean;
}

export function ResetStep({ form, onSubmit, isLoading, isSuccess }: ResetStepProps) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-md animate-in fade-in slide-in-from-right-8 duration-500 mt-6">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">Set New Password</CardTitle>
        <CardDescription>
          Please enter your new password below.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4 py-2">
            <FormInput
              control={form.control}
              name="password"
              label="New Password"
              placeholder="Create a strong password"
              type="password"
              disabled={isLoading || isSuccess}
              icon={Lock}
            />
            <FormInput
              control={form.control}
              name="confirmPassword"
              label="Confirm New Password"
              placeholder="Re-enter your password"
              type="password"
              disabled={isLoading || isSuccess}
              icon={Lock}
            />
            <div className="pt-2">
              <SubmitAuthButton 
                isLoading={isLoading} 
                loadingText="Resetting Password..." 
                defaultText="Reset Password" 
                disabled={isLoading || isSuccess} 
              />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
