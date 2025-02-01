import Link from "next/link";

import { Logo } from "@/layouts/logo";
import { ModeSwitcherHome } from "@/layouts/home/mode-switcher-home";

import { Button } from "@/components/ui/button";

export const HeaderHome = async () => {
  return (
    <>
      <div className="w-full h-2"></div>
      <header className="w-full sticky top-0 z-10 px-2">
        <div className="max-w-screen-xl mx-auto px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl">
          <div className="flex h-16 justify-between items-center">
            <Link href="/" className="flex justify-between items-center gap-2">
              <Logo size={24} />
              <span className="font-bold">Zylo UI</span>
            </Link>
            <div className="flex justify-between items-center gap-2">
              <Button variant="outline" className="rounded-xl">
                <Link href="/auth/sign-in">Iniciar sesión</Link>
              </Button>
              <ModeSwitcherHome />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
