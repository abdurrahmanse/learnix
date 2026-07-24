"use client"

import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MediaUploader } from "@/components/ui/media-uploader"

import { useAuthStore } from "@/store/authStore"
import { useUpdateProfile } from "../hooks/useProfileMutations"
import { getMediaUrl } from "@/lib/utils"

export function AvatarUpload() {
  const { user } = useAuthStore()
  const { mutate: updateProfile, isPending, isSuccess, isError } = useUpdateProfile()

  const handleUploadSuccess = (url: string, publicId: string) => {
    updateProfile({
      avatar_url: url,
      avatar_public_id: publicId
    })
  }

  // Derive which image to show
  // If user has an avatar_url, show that (with backend base URL prepended if it's relative)
  const displayImage = user?.avatar_url ? getMediaUrl(user.avatar_url) : undefined

  return (
    <Card className="w-full border-border/40 shadow-lg shadow-primary/5">
      <CardHeader>
        <CardTitle>Profile Picture</CardTitle>
        <CardDescription>
          Upload a new avatar. Recommended size is 256x256px.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-muted bg-muted/50 mt-4">
            {displayImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={displayImage} alt="Avatar Preview" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                <span className="text-2xl font-semibold">
                  {user?.full_name ? user.full_name.charAt(0).toUpperCase() : "U"}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 space-y-4 w-full text-center sm:text-left">
            <MediaUploader
              onUploadSuccess={handleUploadSuccess}
              folder="learnix_avatars"
              accept="image/*"
              maxSizeMB={5}
            />
          </div>
        </div>

        {/* Status Messages */}
        {isPending && (
          <div className="flex items-center text-sm text-muted-foreground animate-pulse">
            <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Saving profile...
          </div>
        )}
        
        {isSuccess && (
          <div className="rounded-md bg-green-500/15 p-4 text-green-600 dark:text-green-400 border border-green-500/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="h-5 w-5" />
            <p className="text-sm font-medium">Avatar updated successfully!</p>
          </div>
        )}
        
        {isError && (
          <div className="rounded-md bg-destructive/15 p-4 text-destructive border border-destructive/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">Failed to upload avatar. Please try again.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
