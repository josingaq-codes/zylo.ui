import { Hono } from "hono";
import { handle } from "hono/vercel";

import { browse } from "@/modules/home/server/route";

// export const runtime = "edge";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .get("/ping", (c) => {
    return c.json({
      message: "pong",
    });
  })
  .route("/browse", browse);

export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
