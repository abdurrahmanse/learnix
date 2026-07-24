"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Save, BookOpen, DollarSign, Image as ImageIcon, FileText, BarChart, Activity } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { FormInputWithIcon } from "@/components/common/FormInputWithIcon"
import { SubmitAuthButton } from "@/components/common/SubmitAuthButton"

import { Course, CourseCreate } from "../types"

const courseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(255),
  description: z.string().optional().or(z.literal("")),
  short_summary: z.string().max(500).optional().or(z.literal("")),
  thumbnail_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  price: z.coerce.number().min(0, "Price cannot be negative"),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  status: z.enum(["draft", "published", "archived"]),
})

type CourseFormValues = z.infer<typeof courseSchema>

interface CourseFormProps {
  initialData?: Course;
  onSubmitAction: (data: CourseCreate) => void;
  isLoading?: boolean;
}

export function CourseForm({ initialData, onSubmitAction, isLoading = false }: CourseFormProps) {
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema) as any,
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      short_summary: initialData?.short_summary || "",
      thumbnail_url: initialData?.thumbnail_url || "",
      price: initialData?.price || 0,
      level: initialData?.level || "beginner",
      status: initialData?.status || "draft",
    },
  })

  // onSubmit is handled directly in form

  return (
    <Card className="w-full bg-card/60 backdrop-blur-xl border-white/10 shadow-2xl">
      <CardHeader>
        <CardTitle>{initialData ? "Edit Course" : "Create New Course"}</CardTitle>
        <CardDescription>
          {initialData ? "Update the course details below." : "Fill in the details to create a new course."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data: any) => onSubmitAction(data as CourseCreate))} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <FormInputWithIcon
                control={form.control}
                name="title"
                placeholder="Course Title"
                icon={BookOpen}
                disabled={isLoading}
              />

              <FormInputWithIcon
                control={form.control}
                name="price"
                placeholder="Price (e.g. 49.99)"
                icon={DollarSign}
                disabled={isLoading}
              />

              <div className="md:col-span-2">
                <FormInputWithIcon
                  control={form.control}
                  name="short_summary"
                  placeholder="Short Summary (Max 500 characters)"
                  icon={FileText}
                  disabled={isLoading}
                />
              </div>
              
              <div className="md:col-span-2">
                <FormInputWithIcon
                  control={form.control}
                  name="thumbnail_url"
                  placeholder="Thumbnail URL (https://...)"
                  icon={ImageIcon}
                  disabled={isLoading}
                />
              </div>

              {/* Status Select */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Activity className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground z-10" />
                        <select
                          {...field}
                          disabled={isLoading}
                          className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                        >
                          <option value="draft" className="bg-background">Draft</option>
                          <option value="published" className="bg-background">Published</option>
                          <option value="archived" className="bg-background">Archived</option>
                        </select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Level Select */}
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <BarChart className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground z-10" />
                        <select
                          {...field}
                          disabled={isLoading}
                          className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                        >
                          <option value="beginner" className="bg-background">Beginner</option>
                          <option value="intermediate" className="bg-background">Intermediate</option>
                          <option value="advanced" className="bg-background">Advanced</option>
                        </select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Textarea */}
              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          {...field}
                          placeholder="Detailed Course Description (Markdown supported)"
                          disabled={isLoading}
                          className="flex min-h-[150px] w-full rounded-xl border border-input bg-transparent px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

            </div>

            <div className="flex justify-end pt-4">
              <div className="w-48">
                <SubmitAuthButton
                  isLoading={isLoading}
                  defaultText={initialData ? "Update Course" : "Create Course"}
                  loadingText="Saving..."
                  icon={Save}
                  disabled={isLoading}
                  className="w-full h-11 rounded-xl"
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
