import { asc, eq } from 'drizzle-orm'
import db from '../db/drizzle'
import { artist } from '../db/schema'

export const getArtists = () => {
    return db.query.artist.findMany({ orderBy: asc(artist.name) })
}

export const addArtist = (name: string) => {
    return db.insert(artist).values({ name }).returning()
}

export const findArtist = (id: number) => {
    return db.query.artist.findFirst({ where: eq(artist.id, id) })
}