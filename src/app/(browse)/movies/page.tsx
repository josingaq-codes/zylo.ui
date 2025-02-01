import { Metadata } from "next";

import { Movies } from "@/modules/browse/pages/movies";

export const metadata: Metadata = {
  title: "Películas",
};

export default function MoviesPage() {
  return <Movies />;
}
