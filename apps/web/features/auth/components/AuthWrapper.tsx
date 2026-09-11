import { ReactNode } from "react";
import { Container } from "@learnix/ui";

export function AuthWrapper({ children }: { children: ReactNode }) {
  return (
    <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center relative overflow-hidden py-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      {children}
    </Container>
  );
}
