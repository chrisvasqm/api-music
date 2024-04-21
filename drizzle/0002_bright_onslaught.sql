CREATE TABLE IF NOT EXISTS "song" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"duration" integer,
	"albumId" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "song" ADD CONSTRAINT "song_albumId_album_id_fk" FOREIGN KEY ("albumId") REFERENCES "album"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
