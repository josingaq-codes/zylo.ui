import { Metadata } from "next";

import { Shows } from "@/modules/browse/components/shows";

export const metadata: Metadata = {
  title: "Películas",
};

export default function ShowsPage() {
  return <Shows />;
}
