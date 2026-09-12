import { Control, FieldPath, FieldValues } from "react-hook-form"
import { FormField, FormItem, FormControl, FormMessage } from "./form"
import { Input } from "./input"
import { PasswordInput } from "./password-input"
import { LucideIcon } from "lucide-react"

export interface FormInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  icon?: LucideIcon
  placeholder: string
  disabled?: boolean
  type?: "text" | "password" | "email"
}

export function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  icon: Icon,
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
          <FormControl>
            <div className="relative">
              {Icon && (
                <Icon className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              )}
              {type === "password" ? (
                <PasswordInput
                  placeholder={placeholder}
                  className={Icon ? "pl-10 h-12 rounded-xl" : "h-12 rounded-xl"}
                  {...field}
                  disabled={disabled}
                />
              ) : (
                <Input
                  type={type}
                  placeholder={placeholder}
                  className={Icon ? "pl-10 h-12 rounded-xl" : "h-12 rounded-xl"}
                  {...field}
                  disabled={disabled}
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
