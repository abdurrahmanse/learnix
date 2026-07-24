"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function AdminThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="rounded-full opacity-50 cursor-default h-9 px-4">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full h-9 px-4 gap-2 border-border/50 bg-background/50 hover:bg-muted shadow-sm transition-all"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <>
          <Moon className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4 text-amber-500" />
          <span className="text-xs font-medium">Light Mode</span>
        </>
      )}
    </Button>
  )
}
