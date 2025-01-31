import { Hono } from "hono";
import { handle } from "hono/vercel";

import { auth, Session, User } from "@/lib/auth";

import { browse } from "@/modules/browse/server/route";

export const runtime = "nodejs";

const app = new Hono<{
  Variables: {
    user: User | null;
    session: Session | null;
  };
}>().basePath("/api");

app.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) return next();

  c.set("user", session.user);
  c.set("session", session.session);

  return next();
});

app.on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .get("/ping", (c) => {
    return c.json({ message: "pong" });
  })
  .get("/me", async (c) => {
    const session = c.get("session");

    if (!session) return c.json({ error: "Unauthorized" }, { status: 401 });

    const user = c.get("user");

    if (!user) return c.json({ error: "Unauthorized" }, { status: 401 });

    return c.json({ session, user });
  })
  .route("/browse", browse);

export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
