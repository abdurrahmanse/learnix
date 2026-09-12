import { LucideIcon } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "@learnix/ui";

interface AuthCardHeaderProps {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
}

export function AuthCardHeader({ icon: Icon, title, description }: AuthCardHeaderProps) {
  return (
    <CardHeader className="space-y-3 text-center px-8 pb-6 pt-10">
      <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center justify-center mb-4 ring-1 ring-primary/20 shadow-inner">
        <Icon className="h-10 w-10 text-primary drop-shadow-md" />
      </div>
      <CardTitle className="text-3xl font-bold tracking-tight text-foreground">{title}</CardTitle>
      <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
    </CardHeader>
  );
}
