import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { channelsSchema } from "@/modules/browse/browse-schema";

import { db } from "@/db";

const TMDB_API_URL = process.env.TMDB_API_URL!;
const TMDB_TOKEN = process.env.TMDB_TOKEN!;

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const browse = new Hono()
  .get("/trending/movies", async (c) => {
    const url = `${TMDB_API_URL}/3/trending/movie/day?language=en-US`;

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    const data = await response.json();

    const movies: Movie[] = data.results;

    return c.json({ movies });
  })
  .get("/trending/shows", async (c) => {
    const url = `${TMDB_API_URL}/3/trending/tv/day?language=en-US`;

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    const data = await response.json();

    const shows: Show[] = data.results;

    return c.json({ shows });
  })
  .get("/now/movies", async (c) => {
    const url = `${TMDB_API_URL}/3/movie/now_playing?language=en-US`;

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    const data = await response.json();

    const movies: Movie[] = data.results;

    return c.json({ movies });
  })
  .get("/now/shows", async (c) => {
    const url = `${TMDB_API_URL}/3/tv/airing_today?language=en-US`;

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    const data = await response.json();

    const shows: Show[] = data.results;

    return c.json({ shows });
  })
  .get("/channels/category", async (c) => {
    const categories = await db.query.category_channels.findMany({
      columns: {
        id: true,
        name: true,
      },
      where(category_channels, { eq }) {
        return eq(category_channels.active, true);
      },
    });

    return c.json({ categories });
  })
  .post("/channels/provider", zValidator("json", channelsSchema), async (c) => {
    const { categoryId } = c.req.valid("json");

    const channels = await db.query.channels.findMany({
      columns: {
        id: true,
        name: true,
        image: true,
      },
      where(channels, { and, eq }) {
        return and(
          eq(channels.categoryId, Number(categoryId)),
          eq(channels.active, true)
        );
      },
      with: {
        providerChannels: {
          columns: {
            id: true,
            name: true,
            src: true,
            type: true,
          },
          where(provider_channels, { eq }) {
            return eq(provider_channels.active, true);
          },
        },
      },
    });

    return c.json({ channels });
  });
