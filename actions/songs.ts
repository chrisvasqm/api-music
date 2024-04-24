import db from '../db/drizzle'

export const getSongs = () => {
    return db.query.song.findMany();
}