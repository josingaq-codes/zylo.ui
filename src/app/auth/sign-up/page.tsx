import { Metadata } from "next";

import { SignUp } from "@/modules/auth/pages/sign-up";

export const metadata: Metadata = {
  title: "Crear cuenta",
};

export default function SignUpPage() {
  return <SignUp />;
}
