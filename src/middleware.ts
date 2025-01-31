import { NextResponse, NextRequest } from "next/server";
import { betterFetch } from "@better-fetch/fetch";

import { createRouteMatcher } from "@/lib/create-route-matcher";
import { type Session } from "@/lib/auth";

const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"]);

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  if (!session && !isPublicRoute(request)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (session && isPublicRoute(request)) {
    return NextResponse.redirect(new URL("/browse", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon.svg).*)"],
};
