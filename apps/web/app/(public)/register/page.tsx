import { AuthWrapper, GuestGuard } from "@learnix/auth"
import { RegistrationFlow } from "@/features/auth/components/RegistrationFlow"

export default function RegisterPage() {
  return (
    <GuestGuard>
      <AuthWrapper>
        <RegistrationFlow />
      </AuthWrapper>
    </GuestGuard>
  )
}
