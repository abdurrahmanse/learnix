import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";
import { getAvailableRoutes } from "@/lib/navigation";
import { ThemeProvider } from "@/components/theme-provider";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes = getAvailableRoutes();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="learnix-theme-public">
      <Header routes={routes} />
      <main className="flex-1 flex flex-col">
        <Container className="flex-1 flex flex-col w-full h-full">
          {children}
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
