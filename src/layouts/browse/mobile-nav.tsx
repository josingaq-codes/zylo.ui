"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTitle,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const MobileNav = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0" aria-describedby="">
        <DrawerTitle className="px-6">Zylo UI</DrawerTitle>
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            <Link
              href="/browse"
              onClick={() => {
                router.push("/browse");
                onOpenChange(false);
              }}
              className="text-base"
            >
              Inicio
            </Link>
            <Link
              href="/movies"
              onClick={() => {
                router.push("/movies");
                onOpenChange(false);
              }}
              className="text-base"
            >
              Películas
            </Link>
            <Link
              href="/shows"
              onClick={() => {
                router.push("/shows");
                onOpenChange(false);
              }}
              className="text-base"
            >
              Series
            </Link>
            <Link
              href="/live"
              onClick={() => {
                router.push("/live");
                onOpenChange(false);
              }}
              className="text-base"
            >
              TV
            </Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
