import { Hono } from "hono";

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
  });
