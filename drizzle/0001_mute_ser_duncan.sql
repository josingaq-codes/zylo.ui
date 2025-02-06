CREATE TABLE "category_channels" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"active" boolean,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "channels" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL,
	"description" text,
	"active" boolean,
	"category_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "provider_channels" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"src" text NOT NULL,
	"type" text NOT NULL,
	"active" boolean,
	"channel_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "channels" ADD CONSTRAINT "channels_category_id_category_channels_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category_channels"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "provider_channels" ADD CONSTRAINT "provider_channels_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE no action ON UPDATE no action;