import { GuestGuard, LoginForm } from "@learnix/auth"

export default function LoginPage() {
  return (
    <GuestGuard>
      <div className="w-full flex flex-col space-y-6">
        <LoginForm />
      </div>
    </GuestGuard>
  )
}
