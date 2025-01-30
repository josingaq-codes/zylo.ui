import { Metadata } from "next";

import { Home } from "@/modules/browse/components/pages/home";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function HomePage() {
  return <Home />;
}
