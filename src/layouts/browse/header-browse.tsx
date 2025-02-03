import { DesktopNav } from "@/layouts/browse/desktop-nav";
import { MobileNav } from "@/layouts/browse/mobile-nav";
import { SearchCommand } from "@/layouts/browse/search-command";
import { ModeSwitcherBrowse } from "@/layouts/browse/mode-switcher-browse";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserAvatar } from "@/layouts/browse/user-avatar";

export const HeaderBrowse = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <div className="w-full h-2"></div>
      <header className="w-full sticky top-2 z-10 px-2">
        <div className="max-w-screen-xl mx-auto px-4 border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl">
          <div className="flex h-16 justify-between items-center">
            <DesktopNav />
            <MobileNav />
            <div className="flex items-center gap-1">
              <SearchCommand />
              <div className="flex items-center gap-3">
                <ModeSwitcherBrowse />
                {session && <UserAvatar user={session.user} />}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
