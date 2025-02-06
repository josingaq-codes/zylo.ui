import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { channels } from "@/db/schema/channels.chema";
import { relations } from "drizzle-orm";

export const provider_channels = pgTable("provider_channels", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  src: text("src").notNull(),
  type: text("type").notNull(),
  active: boolean("active").$defaultFn(() => true),
  channelId: integer("channel_id").references(() => channels.id),
  createdAt: timestamp("created_at").$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at").$onUpdateFn(() => new Date()),
});

export const providerChannelsRelations = relations(
  provider_channels,
  ({ one }) => ({
    channels: one(channels, {
      fields: [provider_channels.channelId],
      references: [channels.id],
    }),
  })
);

export type providerChannelSelect = typeof provider_channels.$inferSelect;
export type providerChannelInsert = typeof provider_channels.$inferInsert;
