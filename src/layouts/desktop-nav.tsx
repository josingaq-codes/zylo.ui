"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Logo } from "@/components/logo";

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Logo size={24} />
        <span className="hidden font-bold lg:inline-block">Zylo UI</span>
      </Link>

      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Inicio
        </Link>
        <Link
          href="/movies"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/movies")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Películas
        </Link>
        <Link
          href="/shows"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/shows")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Series
        </Link>
        <Link
          href="/live"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/live")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          TV
        </Link>
      </nav>
    </div>
  );
};
