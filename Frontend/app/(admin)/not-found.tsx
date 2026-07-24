import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { AlertCircle } from 'lucide-react'

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center fade-in-up">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
            404
          </h1>
          <h2 className="text-xl font-semibold tracking-tight">
            Dashboard Module Not Found
          </h2>
        </div>
        
        <p className="text-muted-foreground text-sm">
          Oops! The admin module or page you&apos;re looking for doesn&apos;t exist, has been moved, or you don&apos;t have permission to view it.
        </p>
        
        <div className="flex justify-center pt-4">
          <Button asChild className="w-full sm:w-auto shadow-sm">
            <Link href="/admin">
              Return to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
