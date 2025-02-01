import { Metadata } from "next";

import { Shows } from "@/modules/browse/pages/shows";

export const metadata: Metadata = {
  title: "Series",
};

export default function ShowsPage() {
  return <Shows />;
}
