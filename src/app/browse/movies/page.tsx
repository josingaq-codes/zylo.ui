import { Metadata } from "next";

import { Movies } from "@/modules/browse/pages/movies";

export const metadata: Metadata = {
  title: "Página de Películas",
};

export default function MoviesPage() {
  return <Movies />;
}
