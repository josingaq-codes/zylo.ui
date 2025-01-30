import { Header } from "@/layouts/header";

interface BrowseLayoutProps {
  children: React.ReactNode;
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
