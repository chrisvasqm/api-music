import db from '../db/drizzle'
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
