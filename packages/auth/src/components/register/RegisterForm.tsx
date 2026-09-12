"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UserPlus } from "lucide-react"

import { Form } from "@learnix/ui";
import { registerSchema } from "@learnix/utils";
import { SubmitAuthButton } from "../common/SubmitAuthButton"
import { useRegisterMutation } from "../../hooks/useAuthMutations"
import { RegisterFormFields } from "./RegisterFormFields"
import { RegisterFooterLinks } from "./RegisterFooterLinks"

interface RegisterFormProps {
  onSuccess: () => void;
  defaultEmail?: string;
  onEmailChange?: (email: string) => void;
}

export function RegisterForm({ onSuccess, defaultEmail = "", onEmailChange }: RegisterFormProps) {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: defaultEmail,
      username: "",
      full_name: "",
      password: "",
      confirmPassword: "",
    },
  })

  const registerMutation = useRegisterMutation(() => {
    if (onEmailChange) onEmailChange(form.getValues("email"));
    onSuccess();
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    registerMutation.mutate(values)
  }

  const isLoading = registerMutation.isPending

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
        <p className="text-muted-foreground">Enter your details to sign up and start learning.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <RegisterFormFields control={form.control} isLoading={isLoading} />
          <SubmitAuthButton
            isLoading={isLoading}
            loadingText="Creating account..."
            defaultText="Create Account"
            icon={UserPlus}
            disabled={isLoading}
          />
        </form>
      </Form>
      <RegisterFooterLinks />
    </div>
  )
}
