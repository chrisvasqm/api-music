import { Router } from 'express'
import { z } from 'zod'
import { addAlbum, deleteAlbum, findAlbum, getAlbumbs, updateAlbum } from '../actions/album'
import { findArtist } from '../actions/artist'
import Album from '../models/Album'

const router = Router()

const schema = z.object({
    name: z
        .string({ required_error: 'Name is required', invalid_type_error: 'Name must be a string' })
        .min(1, 'Name must be at least 1 character long'),
    artistId: z.number().positive()
})

router.get('/', async (_, response) => {
    const albums = await getAlbumbs()
    return response.send(albums)
})

router.post('/', async (request, response) => {
    const validation = schema.safeParse(request.body)
    if (!validation.success) return response.status(400).send(validation.error.format())

    const { name, artistId } = request.body as Album;

    const artist = await findArtist(artistId);
    if (!artist) return response.status(404).send('Artist not found')

    const album = await addAlbum(name, artistId)

    return response.send(album)
})

router.get('/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    if (isNaN(id)) return response.status(404).send('Album not found')

    const album = await findAlbum(id)
    if (!album) return response.status(404).send('Album not found')

    return response.send(album)
})

router.put('/:id', async (request, response) => {
    const validation = schema.safeParse(request.body)
    if (!validation.success) return response.status(400).send(validation.error.format())

    const id = parseInt(request.params.id)
    if (isNaN(id)) return response.status(404).send('Album not found')

    const album = await findAlbum(id)
    if (!album) return response.status(404).send('Album not found')

    const { name, artistId } = request.body as Album

    const artist = await findArtist(artistId)
    if (!artist) return response.status(404).send('Artist not found')

    const updatedAlbum = await updateAlbum(id, name, artistId)

    return response.send(updatedAlbum)
})

router.delete('/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    if (isNaN(id)) return response.status(404).send('Album not found')

    const album = await findAlbum(id)
    if (!album) return response.status(404).send('Album not found')

    const deletedAlbum = await deleteAlbum(id)

    return response.send(deletedAlbum)
})

export default router