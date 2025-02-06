import { relations } from "drizzle-orm";
import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { channels } from "@/db/schema/channels.chema";

export const category_channels = pgTable("category_channels", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  active: boolean("active").$defaultFn(() => true),
  createdAt: timestamp("created_at").$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});

export const categoryChannelsRelations = relations(
  category_channels,
  ({ many }) => ({
    channels: many(channels),
  })
);

export type CountrySelect = typeof category_channels.$inferSelect;
export type CountryInsert = typeof category_channels.$inferInsert;
