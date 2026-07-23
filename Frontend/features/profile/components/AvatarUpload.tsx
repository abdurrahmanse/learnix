"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AvatarUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = e.target.files[0]
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
      setStatus("idle")
    }
  }

  const handleUpload = () => {
    if (!file) return

    setStatus("loading")
    // Mock upload API call
    setTimeout(() => {
      if (Math.random() > 0.1) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    }, 1500)
  }

  return (
    <Card className="w-full border-border/40 shadow-lg shadow-primary/5">
      <CardHeader>
        <CardTitle>Profile Picture</CardTitle>
        <CardDescription>
          Upload a new avatar. Recommended size is 256x256px.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-muted bg-muted/50">
            {preview ? (
              <img src={preview} alt="Avatar Preview" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                <span className="text-2xl font-semibold">User</span>
              </div>
            )}
          </div>
          
          <div className="flex-1 space-y-4 w-full text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
              <label className="relative cursor-pointer rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors">
                <span>Choose file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                  disabled={status === "loading"}
                />
              </label>
              <span className="text-sm text-muted-foreground truncate max-w-[200px]">
                {file ? file.name : "No file chosen"}
              </span>
            </div>

            <Button
              onClick={handleUpload}
              disabled={!file || status === "loading" || status === "success"}
              className="w-full sm:w-auto"
            >
              {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {status === "loading" ? "Uploading..." : "Upload Avatar"}
            </Button>
          </div>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="rounded-md bg-green-500/15 p-4 text-green-600 dark:text-green-400 border border-green-500/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="h-5 w-5" />
            <p className="text-sm font-medium">Avatar updated successfully!</p>
          </div>
        )}
        
        {status === "error" && (
          <div className="rounded-md bg-destructive/15 p-4 text-destructive border border-destructive/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">Failed to upload avatar. Please try again.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
