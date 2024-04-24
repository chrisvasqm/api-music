import e from 'cors';
import db from '../db/drizzle'
import { song } from '../db/schema';
import { eq } from 'drizzle-orm';

export const getSongs = () => {
    return db.query.song.findMany();
}

export const addSong = (name: string, duration: number, albumId: number) => {
    return db
        .insert(song)
        .values({ name, duration, albumId })
        .returning()
}

export const findSong = (id: number) => {
    return db.query.song.findFirst({ where: eq(song.id, id) });
}
