"use client";

import * as React from "react";
import { Input } from "./input";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../utils";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, icon: Icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative flex w-full items-center">
        {Icon && (
          <Icon className="absolute left-3.5 h-5 w-5 text-muted-foreground" aria-hidden="true" />
        )}
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("pr-12", Icon && "pl-11", className)}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-1 flex h-full items-center justify-center px-3 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Eye className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
