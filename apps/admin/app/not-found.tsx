import Link from 'next/link'
import { Button, Heading, Text } from "@learnix/ui"
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
          <Heading className="text-4xl font-extrabold tracking-tighter sm:text-5xl" level={1}>
            404
          </Heading>
          <Heading className="text-xl font-semibold tracking-tight" level={2}>
            Dashboard Module Not Found
          </Heading>
        </div>
        
        <Text className="text-muted-foreground text-sm">
          Oops! The admin module or page you&apos;re looking for doesn&apos;t exist, has been moved, or you don&apos;t have permission to view it.
        </Text>
        
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
