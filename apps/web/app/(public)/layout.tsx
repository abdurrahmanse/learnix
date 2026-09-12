import { Header } from "@/features/core/components/layout/Header";
import { Footer } from "@/features/core/components/layout/Footer";
import { Container } from "@learnix/ui";
import { getAvailableRoutes } from "@/features/core/config/navigation";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes = getAvailableRoutes();

  return (
    <>
      <Header routes={routes} />
      <main className="flex-1 flex flex-col">
        <Container className="flex-1 flex flex-col w-full h-full">
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}
