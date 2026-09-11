import { Heading, Text } from "@learnix/ui";
import { StudentLoginForm } from "@/features/auth/components/StudentLoginForm";

export default function StudentLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 rounded-2xl border border-border/50 bg-background/60 shadow-xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <Heading className="text-2xl font-bold tracking-tight" level={1}>Student Portal</Heading>
          <Text className="text-sm text-muted-foreground mt-1">Sign in to your student account</Text>
        </div>

        <StudentLoginForm />

        <Text className="mt-4 text-center text-sm text-muted-foreground">
          Not a student?{" "}
          <a
            href={process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:3000"}
            className="text-primary hover:underline"
          >
            Visit Learnix
          </a>
        </Text>
      </div>
    </div>
  );
}
