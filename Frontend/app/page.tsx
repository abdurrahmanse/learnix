import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlayCircle, CheckCircle2, Star, Users, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <Container as="main" className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 md:py-24 overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
      
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Master new skills with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              expert-led courses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            A premium, subscription-based educational platform that bridges the gap between top instructors and eager learners globally.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1" asChild>
              <Link href="/register">Start Learning Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border/60 hover:bg-muted/50 transition-all hover:-translate-y-1" asChild>
              <Link href="/courses">
                <PlayCircle className="mr-2 h-5 w-5" />
                Browse Courses
              </Link>
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground font-medium">
            <span className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
              1,000+ Video Lessons
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
              Expert Instructors
            </span>
          </div>
        </div>
        
        {/* Right Column: Visual Flair / Glassmorphism Demo */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/5 rounded-3xl blur-2xl -z-10" />
          
          <div className="relative w-full max-w-md mx-auto space-y-6">
            {/* Glass Card 1 */}
            <Card className="transform hover:-translate-y-2 transition-transform duration-500 rotate-[-2deg]">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2 fill-yellow-500" />
                  Top Rated Course
                </CardTitle>
                <CardDescription>Advanced Full-Stack Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%]" />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-right">75% Completed</p>
              </CardContent>
            </Card>

            {/* Glass Card 2 */}
            <Card className="transform hover:-translate-y-2 transition-transform duration-500 rotate-[3deg] ml-8">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  Active Community
                </CardTitle>
                <CardDescription>Join 10,000+ active learners worldwide</CardDescription>
              </CardHeader>
              <CardContent className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium">
                    U{i}
                  </div>
                ))}
                <div className="h-10 w-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs font-medium text-primary-foreground">
                  +1k
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    </Container>
  );
}
