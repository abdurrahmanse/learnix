import { AuthGuard } from "@learnix/auth"
import { ProfileLayout } from "@/features/profile/components/ProfileLayout"
import { Heading, Text } from "@learnix/ui";

export default function ProfilePage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background/50 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <div className="py-12 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <Heading className="text-4xl font-extrabold tracking-tight" level={1}>
              User Profile
            </Heading>
            <Text className="text-lg text-muted-foreground mt-2">
              Manage your personal information, avatar, and security settings.
            </Text>
          </div>

          <ProfileLayout />
        </div>
      </div>
    </AuthGuard>
  )
}
