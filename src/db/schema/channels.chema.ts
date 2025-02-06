import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { category_channels } from "@/db/schema/category_channels.schema";
import { provider_channels } from "@/db/schema/provider_channels.chema";

export const channels = pgTable("channels", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  description: text("description"),
  active: boolean("active").$defaultFn(() => true),
  categoryId: integer("category_id").references(() => category_channels.id),
  createdAt: timestamp("created_at").$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});

export const channelsRelations = relations(channels, ({ one, many }) => ({
  countriesChannels: one(category_channels, {
    fields: [channels.categoryId],
    references: [category_channels.id],
  }),
  providerChannels: many(provider_channels),
}));

export type ChannelSelect = typeof channels.$inferSelect;
export type ChannelInsert = typeof channels.$inferInsert;
