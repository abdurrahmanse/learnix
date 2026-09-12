"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Save, CheckCircle2, User, Phone, MapPin, FileText } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@learnix/ui"
import { Form } from "@learnix/ui"

import { useAuthStore } from "@learnix/auth"
import { useUpdateProfile } from "../hooks/useProfileMutations"
import { FormInputWithIcon, SubmitAuthButton } from "@learnix/auth";

import { updateProfileSchema, UpdateProfileValues } from "@learnix/utils"

export function UpdateProfileForm() {
  const { user } = useAuthStore()
  const { mutate: updateProfile, isPending, isSuccess } = useUpdateProfile()

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    // Use `values` to automatically sync with external state without useEffect
    values: {
      full_name: user?.full_name || "",
      bio: user?.bio || "",
      location: user?.location || "",
      phone_number: user?.phone_number || "",
    },
    defaultValues: {
      full_name: "",
      bio: "",
      location: "",
      phone_number: "",
    },
  })

  async function onSubmit(data: UpdateProfileValues) {
    try {
      await updateProfile(data)
    } catch {
      // Error is handled by the mutation hook (toast)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Update your profile details and public information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInputWithIcon
                control={form.control}
                name="full_name"
                placeholder="Abdur Rahman"
                icon={User}
                disabled={isPending}
              />

              <FormInputWithIcon
                control={form.control}
                name="phone_number"
                placeholder="+880 1712345678"
                icon={Phone}
                disabled={isPending}
              />

              <div className="md:col-span-2">
                <FormInputWithIcon
                  control={form.control}
                  name="location"
                  placeholder="New York, USA"
                  icon={MapPin}
                  disabled={isPending}
                />
              </div>

              <div className="md:col-span-2">
                <FormInputWithIcon
                  control={form.control}
                  name="bio"
                  placeholder="Tell us a little bit about yourself"
                  icon={FileText}
                  disabled={isPending}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-48">
                <SubmitAuthButton
                  isLoading={isPending}
                  defaultText="Save Changes"
                  loadingText="Saving..."
                  icon={Save}
                  disabled={isPending || !form.formState.isDirty}
                  className="w-full h-10 rounded-md mt-0"
                />
              </div>

              {isSuccess && !form.formState.isDirty && (
                <span className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center animate-in fade-in">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Saved successfully
                </span>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
