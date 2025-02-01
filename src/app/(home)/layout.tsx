import { HeaderHome } from "@/layouts/home/header-home";
import { FooterHome } from "@/layouts/home/footer-home";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main>
      <HeaderHome />
      {children}
      <FooterHome />
    </main>
  );
}
