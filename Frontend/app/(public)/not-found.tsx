import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-8 max-w-md">
        <div className="space-y-2">
          <h1 className="text-8xl font-extrabold tracking-tighter text-primary/20 sm:text-9xl">
            404
          </h1>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Page not found
          </h2>
        </div>
        
        <p className="text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>
        
        <div className="flex justify-center pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto shadow-md">
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
