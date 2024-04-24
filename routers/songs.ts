import { Request, Response, Router } from 'express';
import { z } from 'zod';
import { findAlbum } from '../actions/album';
import { addSong, findSong, getSongs, updateSong } from '../actions/songs';

const router = Router()

const schema = z.object({
    name: z.string({ required_error: 'Name is required' }).min(1, 'Name must be at least 1 character long'),
    duration: z.number({ required_error: 'Duration is required' }).min(1, 'Duration must be longer than 1 second'),
    albumId: z.number({ required_error: 'AlbumId is required' })
})

router.get('/', async (_: Request, response: Response) => {
    const songs = await getSongs()
    return response.send(songs)
})

router.post('/', async (request: Request, response: Response) => {
    const validation = schema.safeParse(request.body)
    if (!validation.success) return response.status(400).send(validation.error.format())

    const { name, duration, albumId } = request.body

    const album = await findAlbum(albumId)
    if (!album) return response.status(404).send('Album not found.')

    const song = await addSong(name, duration, albumId)

    return response.send(song)
})

router.get('/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    if (isNaN(id)) return response.status(404).send('Song not found')

    const song = await findSong(id);
    if (!song) return response.status(404).send('Song not found')

    return response.send(song)
})

router.put('/:id', async (request: Request, response: Response) => {
    const validation = schema.safeParse(request.body)
    if (!validation.success) return response.status(400).send(validation.error.format())

    const id = parseInt(request.params.id)
    if (isNaN(id)) return response.status(404).send('Song not found')

    const song = await findSong(id);
    if (!song) return response.status(404).send('Song not found')

    const { name, duration, albumId } = request.body

    const album = await findAlbum(albumId)
    if (!album) return response.status(404).send('Album not found')

    const updatedSong = await updateSong(id, name, duration, albumId)

    return response.send(updatedSong)
})

export default router