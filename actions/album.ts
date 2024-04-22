import { asc, eq } from 'drizzle-orm';
import db from '../db/drizzle';
import { album } from '../db/schema';

export const getAlbumbs = () => {
    return db.query.album.findMany({ orderBy: asc(album.name) })
};

export const addAlbum = (name: string, artistId: number) => {
    return db
        .insert(album)
        .values({ name, artistId })
        .returning()
}

export const findAlbum = (id: number) => {
    return db.query.album.findFirst({ where: eq(album.id, id) })
}

export const updateAlbum = (id: number, name: string, artistId: number) => {
    return db
        .update(album)
        .set({ id, name, artistId })
        .where(eq(album.id, id))
        .returning()
}