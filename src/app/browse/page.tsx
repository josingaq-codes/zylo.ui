import { Metadata } from "next";

import { Browse } from "@/modules/browse/pages/browse";

export const metadata: Metadata = {
  title: "Página de Inicio",
};

export default function BrowsePage() {
  return <Browse />;
}
