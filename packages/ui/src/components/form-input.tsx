import { Control, FieldPath, FieldValues } from "react-hook-form"
import { FormField, FormItem, FormControl, FormMessage, FormLabel, FormDescription } from "./form"
import { Input } from "./input"
import { PasswordInput } from "./password-input"
import { LucideIcon } from "lucide-react"

export interface FormInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  icon?: LucideIcon // Kept for backwards compatibility but unused
  label?: string
  description?: string
  placeholder: string
  disabled?: boolean
  type?: "text" | "password" | "email"
}

export function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  disabled,
  type = "text",
}: FormInputProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {type === "password" ? (
              <PasswordInput
                placeholder={placeholder}
                {...field}
                disabled={disabled}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                disabled={disabled}
              />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
