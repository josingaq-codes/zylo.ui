import { Metadata } from "next";
import { Home } from "@/modules/home/components/home";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function HomePage() {
  return <Home />;
}
