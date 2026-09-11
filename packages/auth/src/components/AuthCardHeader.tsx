import { LucideIcon } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "@learnix/ui";

interface AuthCardHeaderProps {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
}

export function AuthCardHeader({ icon: Icon, title, description }: AuthCardHeaderProps) {
  return (
    <CardHeader className="space-y-2 text-center pb-8 pt-10">
      <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <CardTitle className="text-4xl font-extrabold tracking-tight">{title}</CardTitle>
      <CardDescription className="text-base font-light">{description}</CardDescription>
    </CardHeader>
  );
}
