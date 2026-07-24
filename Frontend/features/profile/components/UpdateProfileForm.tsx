"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Save, CheckCircle2, User, Phone, MapPin, FileText } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"

import { useAuthStore } from "@/store/authStore"
import { useUpdateProfile } from "../hooks/useProfileMutations"
import { useEffect } from "react"
import { FormInputWithIcon } from "@/components/common/FormInputWithIcon"
import { SubmitAuthButton } from "@/components/common/SubmitAuthButton"

import { updateProfileSchema, UpdateProfileValues } from "@/lib/validations/profile"

export function UpdateProfileForm() {
  const { user } = useAuthStore()
  const { mutate: updateProfile, isPending, isSuccess } = useUpdateProfile()

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      full_name: user?.full_name || "",
      bio: user?.bio || "",
      location: user?.location || "",
      phone_number: user?.phone_number || "",
    },
  })

  // Update form if user data loads later
  useEffect(() => {
    if (user) {
      form.reset({
        full_name: user.full_name || "",
        bio: user.bio || "",
        location: user.location || "",
        phone_number: user.phone_number || "",
      })
    }
  }, [user, form])

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
