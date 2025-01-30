import { DesktopNav } from "@/layouts/desktop-nav";
import { MobileNav } from "@/layouts/mobile-nav";
import { ModeSwitcher } from "@/layouts/mode-switcher";

import { SearchCommand } from "@/components/search-command";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 justify-between items-center">
          <DesktopNav />
          <MobileNav />
          <div className="flex items-center gap-0.5">
            <SearchCommand />
            <Button variant="outline">Iniciar sesión</Button>
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
