import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  Input,
  Textarea,
} from "@learnix/ui";
import { type Control } from "react-hook-form";
import { type CourseFormValues } from "@learnix/utils";

interface CourseBasicInfoSectionProps {
  control: Control<CourseFormValues>;
}

/** Form fields: title, short summary, full description. */
export function CourseBasicInfoSection({ control }: CourseBasicInfoSectionProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Course Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Advanced Next.js" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="short_summary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Short Summary</FormLabel>
            <FormControl>
              <Textarea placeholder="Brief excerpt for course cards..." className="resize-none h-20" {...field} />
            </FormControl>
            <FormDescription>Max 500 characters.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Description (Markdown)</FormLabel>
            <FormControl>
              <Textarea placeholder="Detailed description of the course..." className="min-h-[200px]" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
