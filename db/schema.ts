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
