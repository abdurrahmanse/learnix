import { UseFormReturn } from "react-hook-form";
import { Lock, KeyRound } from "lucide-react";
import { Form, CardContent } from "@learnix/ui";
import { AuthCardHeader, FormInputWithIcon, SubmitAuthButton } from "@learnix/auth";
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
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <AuthCardHeader icon={Lock} title="Set New Password" description="Please enter your new password below." />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInputWithIcon control={form.control} name="password" icon={Lock} placeholder="New Password" type="password" disabled={isLoading || isSuccess} />
            <FormInputWithIcon control={form.control} name="confirmPassword" icon={KeyRound} placeholder="Confirm New Password" type="password" disabled={isLoading || isSuccess} />
            <SubmitAuthButton isLoading={isLoading} loadingText="Resetting Password..." defaultText="Reset Password" disabled={isLoading || isSuccess} />
          </form>
        </Form>
      </CardContent>
    </div>
  );
}
