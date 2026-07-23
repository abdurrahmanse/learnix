import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, CheckCircle2, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden relative min-h-[calc(100vh-8rem)]">


      {/* Decorative Floating Cards (Hidden on mobile for cleaner look) */}
      <div className="hidden lg:block absolute left-[5%] top-[20%] -rotate-6 opacity-80 pointer-events-none animate-pulse duration-1000">
        <Card className="w-64 backdrop-blur-md bg-card/40 border-primary/10 shadow-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-sm">
              <Star className="h-4 w-4 text-yellow-500 mr-2 fill-yellow-500" />
              Trending Research Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%]" />
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 text-right">90% Completed</p>
          </CardContent>
        </Card>
      </div>

      <div className="hidden lg:block absolute right-[5%] bottom-[25%] rotate-6 opacity-80 pointer-events-none animate-pulse duration-1000 delay-500">
        <Card className="w-64 backdrop-blur-md bg-card/40 border-primary/10 shadow-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-sm">
              <Users className="h-4 w-4 text-blue-500 mr-2" />
              Active Collaborators
            </CardTitle>
          </CardHeader>
          <CardContent className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-medium">
                U{i}
              </div>
            ))}
            <div className="h-8 w-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-medium text-primary-foreground">
              +1k
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Centered Content */}
      <div className="max-w-4xl w-full text-center space-y-8 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          Master Data Science with <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Research Papers
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          Learn Data Science with real-world projects and build your research portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1" asChild>
            <Link href="/register">
              <Star className="mr-2 h-5 w-5" />
              Enroll Now
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border/60 hover:bg-muted/50 transition-all hover:-translate-y-1" asChild>
            <Link href="/courses">
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
        </div>

        <div className="pt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
          <span className="flex items-center bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
            50+ Projects
          </span>
          <span className="flex items-center bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
            10+ Taught By Experts
          </span>
          <span className="flex items-center bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
            Learn Anywhere
          </span>
        </div>
      </div>
    </Container>
  );
}
