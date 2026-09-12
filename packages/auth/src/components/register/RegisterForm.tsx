"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UserPlus, Mail, User, Lock } from "lucide-react"

import { 
  Form, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  FormInput
} from "@learnix/ui"
import { registerSchema } from "@learnix/utils"
import { SubmitAuthButton } from "../common/SubmitAuthButton"
import { useRegisterMutation } from "../../hooks/useAuthMutations"
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
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">Create an account</CardTitle>
        <CardDescription>
          Enter your details to sign up and start learning
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
            <FormInput
              control={form.control}
              name="username"
              label="Username"
              placeholder="johndoe123"
              type="text"
              disabled={isLoading}
              icon={User}
            />
            <FormInput
              control={form.control}
              name="full_name"
              label="Full Name"
              placeholder="John Doe"
              type="text"
              disabled={isLoading}
              icon={User}
            />
            <FormInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Create a strong password"
              type="password"
              disabled={isLoading}
              icon={Lock}
            />
            <FormInput
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re-enter your password"
              type="password"
              disabled={isLoading}
              icon={Lock}
            />
            
            <div className="pt-2">
              <SubmitAuthButton
                isLoading={isLoading}
                loadingText="Creating account..."
                defaultText="Create Account"
                icon={UserPlus}
                disabled={isLoading}
              />
            </div>
          </form>
        </Form>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-4 text-center text-sm text-muted-foreground">
        <RegisterFooterLinks />
      </CardFooter>
    </Card>
  )
}
