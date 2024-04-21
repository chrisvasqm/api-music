import { asc, eq } from 'drizzle-orm'
import db from '../db/drizzle'
import { artist } from '../db/schema'
import Artist from '../models/Artist'

export const getArtists = () => {
    return db.query.artist.findMany({ orderBy: asc(artist.name) })
}

export const addArtist = (name: string) => {
    return db
        .insert(artist)
        .values({ name })
        .returning()
}

export const findArtist = (id: number) => {
    return db.query.artist.findFirst({ where: eq(artist.id, id) })
}

export const updateArtist = (data: Artist) => {
    return db
        .update(artist)
        .set({ name: data.name })
        .where(eq(artist.id, data.id))
        .returning()
}

export const deleteArtist = (id: number) => {
    return db
        .delete(artist)
        .where(eq(artist.id, id))
        .returning()
}
