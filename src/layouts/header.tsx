import { DesktopNav } from "@/layouts/desktop-nav";
import { MobileNav } from "@/layouts/mobile-nav";
import { SearchCommand } from "@/layouts/search-command";
import { ModeSwitcher } from "@/layouts/mode-switcher";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserAvatar } from "@/layouts/user-avatar";

export const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 justify-between items-center">
          <DesktopNav />
          <MobileNav />
          <div className="flex items-center gap-0.5">
            <SearchCommand />
            {session ? (
              <UserAvatar user={session.user} />
            ) : (
              <Button variant="outline">
                <Link href="/sign-in">Iniciar sesión</Link>
              </Button>
            )}
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
