"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Logo } from "@/layouts/logo";

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/browse" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Logo size={24} />
        <span className="hidden font-bold lg:inline-block">Zylo UI</span>
      </Link>

      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/browse"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/browse" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Inicio
        </Link>
        <Link
          href="/browse/movies"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/browse/movies")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Películas
        </Link>
        <Link
          href="/browse/shows"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/browse/shows")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Series
        </Link>
        <Link
          href="/browse/live"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/browse/live")
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
