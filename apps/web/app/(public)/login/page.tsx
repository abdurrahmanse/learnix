import { AuthWrapper } from "@/features/auth/components/AuthWrapper"
import { Card } from "@learnix/ui"
import { GuestGuard } from "@/features/auth/components/GuestGuard"
import { LoginForm } from "@/features/auth/components/LoginForm"

export default function LoginPage() {
  return (
    <GuestGuard>
      <AuthWrapper>
        <Card className="w-full max-w-md shadow-2xl shadow-primary/5 border-border/40 bg-background/60 backdrop-blur-xl rounded-2xl">
          <LoginForm />
        </Card>
      </AuthWrapper>
    </GuestGuard>
  )
}
