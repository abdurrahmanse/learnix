import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  MediaUploader,
} from "@learnix/ui";
import { type Control, type UseFormSetValue } from "react-hook-form";
import { type CourseFormValues } from "@learnix/utils";

interface CourseThumbnailSectionProps {
  control: Control<CourseFormValues>;
  setValue: UseFormSetValue<CourseFormValues>;
}

/** Form field: thumbnail image upload via MediaUploader. */
export function CourseThumbnailSection({ control, setValue }: CourseThumbnailSectionProps) {
  return (
    <FormField
      control={control}
      name="thumbnail_url"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Course Thumbnail</FormLabel>
          <FormControl>
            <MediaUploader
              onUploadSuccess={(url, publicId) => {
                setValue("thumbnail_url", url, { shouldValidate: true });
                setValue("thumbnail_public_id", publicId, { shouldValidate: true });
              }}
              folder="learnix_courses"
              accept="image/*"
              maxSizeMB={5}
              defaultPreviewUrl={field.value}
            />
          </FormControl>
          <FormDescription>Upload a high quality thumbnail (16:9 recommended).</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
