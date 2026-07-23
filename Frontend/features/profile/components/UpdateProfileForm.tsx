"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Save, Loader2, CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const updateProfileSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters."),
  bio: z.string().max(160, "Bio must not be longer than 160 characters.").optional().or(z.literal("")),
  location: z.string().max(50, "Location is too long.").optional().or(z.literal("")),
  phone_number: z.string().max(20, "Phone number is too long.").optional().or(z.literal("")),
})

type UpdateProfileValues = z.infer<typeof updateProfileSchema>

export function UpdateProfileForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      full_name: "Student 1",
      bio: "",
      location: "",
      phone_number: "",
    },
  })

  function onSubmit(data: UpdateProfileValues) {
    setStatus("loading")
    // Mock API call
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <Card className="w-full border-border/40 shadow-lg shadow-primary/5">
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
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="New York, USA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Input placeholder="Tell us a little bit about yourself" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Save className="mr-2 h-4 w-4" />
                )}
                Save Changes
              </Button>
              
              {status === "success" && (
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
