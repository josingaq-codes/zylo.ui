import { HeaderHome } from "@/layouts/home/header-home";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main>
      <HeaderHome />
      {children}
    </main>
  );
}
