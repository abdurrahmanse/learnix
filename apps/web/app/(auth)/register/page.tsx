import { GuestGuard } from "@learnix/auth"
import { RegistrationFlow } from "@/features/auth/components/RegistrationFlow"

export default function RegisterPage() {
  return (
    <GuestGuard>
      <div className="w-full flex flex-col space-y-6">
        <RegistrationFlow />
      </div>
    </GuestGuard>
  )
}
