import { AuthWrapper, GuestGuard, LoginForm } from "@learnix/auth"
import { Card } from "@learnix/ui"

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
