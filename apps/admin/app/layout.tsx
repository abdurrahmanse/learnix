import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import { AuthGuard } from "@learnix/auth";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learnix Admin",
  description: "Learnix Administration Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Providers>
          <AuthGuard requireRole="admin">
            {children}
          </AuthGuard>
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
