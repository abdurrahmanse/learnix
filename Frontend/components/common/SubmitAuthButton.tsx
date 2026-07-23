import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SubmitAuthButtonProps {
  isLoading: boolean;
  loadingText: string;
  defaultText: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  className?: string;
}

export function SubmitAuthButton({
  isLoading,
  loadingText,
  defaultText,
  icon: Icon,
  iconPosition = "left",
  disabled,
  className = "w-full h-12 rounded-xl mt-4",
}: SubmitAuthButtonProps) {
  return (
    <Button className={className} type="submit" disabled={isLoading || disabled}>
      {isLoading ? (
        loadingText
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon className="mr-2 h-5 w-5" />}
          {defaultText}
          {Icon && iconPosition === "right" && <Icon className="ml-2 h-5 w-5" />}
        </>
      )}
    </Button>
  );
}
