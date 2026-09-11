import { Heading, Text } from "@learnix/ui";
import { AdminLoginForm } from "@/features/auth/components/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 rounded-2xl border border-border/50 bg-background/60 shadow-xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <Heading className="text-2xl font-bold tracking-tight" level={1}>Learnix Admin</Heading>
          <Text className="text-sm text-muted-foreground mt-1">Sign in to your admin account</Text>
        </div>

        <AdminLoginForm />
      </div>
    </div>
  );
}
