import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "@/db/schema";

const poolConnection = new Pool({
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  host: process.env.DATABASE_HOST!,
  port: parseInt(process.env.DATABASE_PORT!, 10),
  database: process.env.DATABASE_NAME!,
  ssl: process.env.DATABASE_SSL! === "true",
});

export const db = drizzle(poolConnection, { schema });
