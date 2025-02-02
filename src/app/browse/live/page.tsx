import { Metadata } from "next";

import { Tv } from "@/modules/browse/pages/tv";

export const metadata: Metadata = {
  title: "Página de Programas de TV",
};

export default function MoviesPage() {
  return <Tv />;
}
