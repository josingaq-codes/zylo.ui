import { HeaderBrowse } from "@/layouts/browse/header-browse";

interface BrowseLayoutProps {
  children: React.ReactNode;
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
  return (
    <main>
      <HeaderBrowse />
      {children}
    </main>
  );
}
