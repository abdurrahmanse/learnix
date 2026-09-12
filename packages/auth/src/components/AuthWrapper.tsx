import { ReactNode } from "react";
import { Container } from "@learnix/ui";

export function AuthWrapper({ children }: { children: ReactNode }) {
  return (
    <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center relative overflow-hidden py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-[20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
      <div className="relative z-10 w-full flex justify-center">
        {children}
      </div>
    </Container>
  );
}
