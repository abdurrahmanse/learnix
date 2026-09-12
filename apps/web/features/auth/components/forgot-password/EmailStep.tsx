import { UseFormReturn } from "react-hook-form";
import { Mail, KeyRound, ArrowLeft, ArrowRight } from "lucide-react";
import { Form, Link } from "@learnix/ui";
import { SubmitAuthButton } from "@learnix/auth";
import { FormInput } from "@learnix/ui";
import * as z from "zod";
import { emailSchema } from "@learnix/utils";

interface EmailStepProps {
  form: UseFormReturn<z.infer<typeof emailSchema>>;
  onSubmit: (data: z.infer<typeof emailSchema>) => void;
  isLoading: boolean;
}

export function EmailStep({ form, onSubmit, isLoading }: EmailStepProps) {
  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 mt-6">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Reset Password</h1>
        <p className="text-muted-foreground">Enter your email address to receive a verification code.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormInput control={form.control} name="email" icon={Mail} placeholder="Email Address" type="email" disabled={isLoading} />
          <SubmitAuthButton isLoading={isLoading} loadingText="Sending Code..." defaultText="Send Reset Code" icon={ArrowRight} iconPosition="right" disabled={isLoading} />
        </form>
      </Form>

      <div className="flex flex-col space-y-4 pb-8 pt-8 text-center">
        <div className="text-sm text-muted-foreground">
          Remembered your password?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline inline-flex items-center">
            <ArrowLeft className="mr-1 h-3 w-3" /> Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
