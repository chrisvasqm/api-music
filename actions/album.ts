import { asc } from 'drizzle-orm';
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