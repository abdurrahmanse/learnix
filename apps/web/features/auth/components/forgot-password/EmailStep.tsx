import { UseFormReturn } from "react-hook-form";
import { Mail, KeyRound, ArrowLeft, ArrowRight } from "lucide-react";
import { Form, CardContent, CardFooter, Link } from "@learnix/ui";
import { AuthCardHeader, SubmitAuthButton } from "@learnix/auth";
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AuthCardHeader
        icon={KeyRound}
        title="Reset Password"
        description="Enter your email address to receive a verification code."
      />
      <CardContent className="px-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormInput control={form.control} name="email" icon={Mail} placeholder="Email Address" type="email" disabled={isLoading} />
            <SubmitAuthButton isLoading={isLoading} loadingText="Sending Code..." defaultText="Send Reset Code" icon={ArrowRight} iconPosition="right" disabled={isLoading} />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 px-8 pb-8 pt-4">
        <div className="text-sm text-center text-muted-foreground">
          Remembered your password?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline inline-flex items-center">
            <ArrowLeft className="mr-1 h-3 w-3" /> Back to login
          </Link>
        </div>
      </CardFooter>
    </div>
  );
}
