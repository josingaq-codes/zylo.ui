import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    host: process.env.DATABASE_HOST!,
    port: parseInt(process.env.DATABASE_PORT!, 10),
    database: process.env.DATABASE_NAME!,
    ssl: process.env.DATABASE_SSL! === "true",
  },
  migrations: {
    table: "drizzle_migrations",
    schema: "public",
  },
  verbose: true,
  strict: true,
});
