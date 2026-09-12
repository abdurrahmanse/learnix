import { BookOpen } from "lucide-react"
import { Link } from "@learnix/ui"
import { ThemeProvider, ThemeToggle } from "@learnix/ui"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="learnix-theme-public">
      <div className="flex min-h-screen bg-background">
        {/* Left Pane - Branding */}
        <div className="hidden lg:flex w-1/2 flex-col justify-between bg-zinc-950 p-12 text-white border-r border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5 pointer-events-none" />
          
          <div className="relative z-10 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">Learnix</span>
          </div>

          <div className="relative z-10 space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter">
              Start your journey into the world of Data Science.
            </h1>
            <p className="text-zinc-400 text-lg max-w-md">
              Learnix provides the premier interactive platform to master data structures, AI, and advanced analytics.
            </p>
          </div>
          
          <div className="relative z-10 text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Learnix, Inc. All rights reserved.
          </div>
        </div>

        {/* Right Pane - Auth Forms */}
        <div className="flex-1 flex flex-col justify-center relative">
          <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 w-full max-w-[500px] mx-auto min-h-screen lg:min-h-0">
            {/* Mobile Header (Hidden on LG) */}
            <div className="flex lg:hidden items-center gap-3 mb-10 self-start">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">Learnix</span>
            </div>
            
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
