import { relations } from 'drizzle-orm';
import { date, integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const artist = pgTable('artist', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 })
})

export const album = pgTable('album', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    releaseDate: date('releaseDate', { mode: 'string' }).defaultNow(),
    artistId: integer('artistId').references(() => artist.id)
})

export const albumRelation = relations(album, ({ one }) => ({
    artist: one(artist, {
        fields: [album.artistId],
        references: [artist.id]
    })
}))

export const song = pgTable('song', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    duration: integer('duration'),
    albumId: integer('albumId').references(() => album.id)
})

export const songRelation = relations(song, ({ one }) => ({
    album: one(album, {
        fields: [song.albumId],
        references: [album.id]
    })
}))