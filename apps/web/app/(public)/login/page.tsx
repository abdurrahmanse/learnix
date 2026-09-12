import { AuthWrapper, GuestGuard, LoginForm } from "@learnix/auth"
import { Card } from "@learnix/ui"

export default function LoginPage() {
  return (
    <GuestGuard>
      <AuthWrapper>
        <Card className="w-full max-w-[440px] shadow-2xl shadow-black/10 border-white/10 bg-background/50 backdrop-blur-2xl rounded-3xl overflow-hidden ring-1 ring-white/5 dark:bg-black/40">
          <LoginForm />
        </Card>
      </AuthWrapper>
    </GuestGuard>
  )
}
