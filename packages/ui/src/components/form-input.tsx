import { Control, FieldPath, FieldValues } from "react-hook-form"
import { FormField, FormItem, FormControl, FormMessage, FormLabel, FormDescription } from "./form"
import { Input } from "./input"
import { PasswordInput } from "./password-input"
import { LucideIcon } from "lucide-react"
import { cn } from "../utils"

export interface FormInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  icon?: LucideIcon
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
  icon: Icon,
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
                icon={Icon}
                {...field}
                disabled={disabled}
              />
            ) : (
              <div className="relative flex w-full items-center">
                {Icon && (
                  <Icon className="absolute left-3.5 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                )}
                <Input
                  type={type}
                  placeholder={placeholder}
                  className={cn(Icon && "pl-11")}
                  {...field}
                  disabled={disabled}
                />
              </div>
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
