import type { Metadata } from "next";

import { Providers } from "@/providers";

import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";

import "@fontsource-variable/onest";

export const metadata: Metadata = {
  title: {
    default: "Zylo UI",
    template: "%s - Zylo UI",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className="antialiased">
        <Providers>
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-svh flex-col bg-background">
              {children}
            </div>
          </div>
          <Toaster richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
