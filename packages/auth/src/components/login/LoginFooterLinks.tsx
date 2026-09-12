"use client"

import { Link } from "@learnix/ui"
import { CardFooter } from "@learnix/ui"

export function LoginFooterLinks() {
  return (
    <CardFooter className="flex flex-col space-y-4 px-8 pb-8 pt-4">
      <div className="text-sm text-center text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </CardFooter>
  )
}
