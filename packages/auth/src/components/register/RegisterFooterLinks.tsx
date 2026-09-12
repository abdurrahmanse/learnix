"use client"

import { Link } from "@learnix/ui"
import { CardFooter } from "@learnix/ui"

export function RegisterFooterLinks() {
  return (
    <CardFooter className="flex flex-col space-y-4 pb-8">
      <div className="text-sm text-center text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </CardFooter>
  )
}
