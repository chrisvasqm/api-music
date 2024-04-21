import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const artist = pgTable('artist', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 })
})