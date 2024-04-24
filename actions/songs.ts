import { eq } from 'drizzle-orm';
import db from '../db/drizzle';
import { song } from '../db/schema';

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
    return db.query.song.findFirst({
        where: eq(song.id, id),
        with: { album: true },
        columns: {
            id: true,
            name: true,
            duration: true
        }
    });
}

export const updateSong = (id: number, name: string, duration: number, albumId: number) => {
    return db
        .update(song)
        .set({ name, duration, albumId })
        .where(eq(song.id, id))
        .returning()
}

export const deleteSong = (id: number) => {
    return db
        .delete(song)
        .where(eq(song.id, id))
        .returning()
}