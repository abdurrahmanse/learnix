import { UseFormReturn } from "react-hook-form";
import { Mail, KeyRound, ArrowLeft, ArrowRight } from "lucide-react";
import { Form, Link, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@learnix/ui";
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
    <Card className="w-full max-w-md mx-auto shadow-md animate-in fade-in slide-in-from-right-8 duration-500 mt-6">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">Forgot Password</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you a reset code.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4 py-2">
            <FormInput
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="m@example.com"
              type="email"
              disabled={isLoading}
              icon={Mail}
            />
            <div className="pt-2">
              <SubmitAuthButton 
                isLoading={isLoading} 
                loadingText="Sending Code..." 
                defaultText="Send Reset Code" 
                disabled={isLoading} 
              />
            </div>
          </form>
        </Form>
      </CardContent>
      
      <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
        <Link href="/login" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </CardFooter>
    </Card>
  );
}
