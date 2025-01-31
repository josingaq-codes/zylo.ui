import { createAuthClient } from "better-auth/react";
import {
  adminClient,
  multiSessionClient,
  oneTapClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL!,
  plugins: [
    adminClient(),
    multiSessionClient(),
    oneTapClient({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    }),
  ],
});

export const { signIn, signUp, signOut, useSession } = authClient;
