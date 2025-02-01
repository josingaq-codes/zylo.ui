import { Metadata } from "next";

import { Shows } from "@/modules/browse/pages/shows";

export const metadata: Metadata = {
  title: "Página de Series",
};

export default function ShowsPage() {
  return <Shows />;
}
