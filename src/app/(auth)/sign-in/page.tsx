import { Metadata } from "next";

import { SignIn } from "@/modules/auth/components/pages/sign-in";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
};

export default function SignInPage() {
  return <SignIn />;
}
