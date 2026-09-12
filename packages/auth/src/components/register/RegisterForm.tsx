"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UserPlus } from "lucide-react"

import { Form, CardContent } from "@learnix/ui";
import { registerSchema } from "@learnix/utils"
import { AuthCardHeader } from "../AuthCardHeader"
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AuthCardHeader
        icon={UserPlus}
        title="Create an account"
        description="Enter your details to sign up"
      />
      <CardContent className="px-8">
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
      </CardContent>
      <RegisterFooterLinks />
    </div>
  )
}
