import { UseFormReturn } from "react-hook-form";
import { Lock, KeyRound } from "lucide-react";
import { Form, CardContent } from "@learnix/ui";
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
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-500 mt-6">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Set New Password</h1>
        <p className="text-muted-foreground">Please enter your new password below.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormInput control={form.control} name="password" icon={Lock} placeholder="New Password" type="password" disabled={isLoading || isSuccess} />
          <FormInput control={form.control} name="confirmPassword" icon={KeyRound} placeholder="Confirm New Password" type="password" disabled={isLoading || isSuccess} />
          <SubmitAuthButton isLoading={isLoading} loadingText="Resetting Password..." defaultText="Reset Password" disabled={isLoading || isSuccess} />
        </form>
      </Form>
    </div>
  );
}
