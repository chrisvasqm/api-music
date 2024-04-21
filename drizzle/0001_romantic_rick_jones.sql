CREATE TABLE IF NOT EXISTS "album" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"releaseDate" date DEFAULT now(),
	"artistId" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "album" ADD CONSTRAINT "album_artistId_artist_id_fk" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
