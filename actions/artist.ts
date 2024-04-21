import { eq } from 'drizzle-orm'
import db from '../db/drizzle'
import { artist } from '../db/schema'

export const getArtists = () => {
    return db.select().from(artist)
}

export const addArtist = (name: string) => {
    return db.insert(artist).values({ name }).returning()
}

export const findArtist = (id: number) => {
    return db.query.artist.findFirst({ where: eq(artist.id, id) })
}