"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Save, CheckCircle2, Lock, KeyRound } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { useUpdatePassword } from "../hooks/useProfileMutations"
import { FormInputWithIcon } from "@/components/common/FormInputWithIcon"
import { SubmitAuthButton } from "@/components/common/SubmitAuthButton"

import { changePasswordSchema, ChangePasswordValues } from "@/lib/validations/profile"

export function ChangePasswordForm() {
  const { mutate: updatePassword, isPending, isSuccess } = useUpdatePassword()

  const form = useForm<ChangePasswordValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      confirm_password: "",
    },
  })

  async function onSubmit(data: ChangePasswordValues) {
    try {
      await updatePassword(data)
      form.reset()
    } catch {
      // Error handled by mutation hook
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>
          Ensure your account is using a long, random password to stay secure.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md">
            <FormInputWithIcon
              control={form.control}
              name="current_password"
              placeholder="Enter current password"
              icon={KeyRound}
              type="password"
              disabled={isPending}
            />

            <FormInputWithIcon
              control={form.control}
              name="new_password"
              placeholder="Enter new password"
              icon={Lock}
              type="password"
              disabled={isPending}
            />

            <FormInputWithIcon
              control={form.control}
              name="confirm_password"
              placeholder="Confirm new password"
              icon={Lock}
              type="password"
              disabled={isPending}
            />

            <div className="flex items-center gap-4 pt-2">
              <div className="w-48">
                <SubmitAuthButton
                  isLoading={isPending}
                  defaultText="Update Password"
                  loadingText="Updating..."
                  icon={Save}
                  disabled={isPending}
                  className="w-full h-10 rounded-md mt-0"
                />
              </div>
              
              {isSuccess && !form.formState.isDirty && (
                <span className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center animate-in fade-in">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Password updated
                </span>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
