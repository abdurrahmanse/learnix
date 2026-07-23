import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-6 md:p-24 overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl w-full text-center space-y-8 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-4">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Learnix Platform v1.0 is Live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          The Next Generation of <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Digital Learning
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          A premium, seamless, and intelligent educational platform designed for modern classrooms and curious minds.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1" asChild>
            <Link href="/register">Get Started Free</Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border/60 hover:bg-muted/50 transition-all hover:-translate-y-1" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
        
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/40 text-left">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Interactive</h3>
            <p className="text-sm text-muted-foreground">Engaging, real-time classroom interactions.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Analytics</h3>
            <p className="text-sm text-muted-foreground">Deep insights into learning progression.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Accessible</h3>
            <p className="text-sm text-muted-foreground">Learn from anywhere, on any device.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Secure</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade security and privacy.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
