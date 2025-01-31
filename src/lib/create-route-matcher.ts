import type { NextRequest } from "next/server";

interface RouteMatcher {
  (request: NextRequest): boolean;
}

const getValidRoutes = (routes: string[]): string[] => {
  return Array.from(
    new Set(
      routes.filter((route) => typeof route === "string" && route.trim() !== "")
    )
  );
};

export const createRouteMatcher = (routes: string[]): RouteMatcher => {
  const validRoutes = getValidRoutes(routes);

  const regexes = validRoutes.map((route) => new RegExp(`^${route}$`, "i"));

  return (request): boolean => {
    const pathname = request.nextUrl.pathname.toLowerCase();

    return regexes.some((regex) => regex.test(pathname));
  };
};
