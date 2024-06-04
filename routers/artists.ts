import { Router } from 'express'
import { z } from 'zod'
import { addArtist, deleteArtist, findArtist, getArtists, updateArtist } from '../actions/artist'

const router = Router()

const schema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .min(1, 'Name must be at least 1 character long')
})

router.get('/', async (_, response) => {
    const artists = await getArtists()

    return response.send(artists)
})

router.post('/', async (request, response) => {
    const validation = schema.safeParse(request.body);
    if (!validation.success) return response.status(400).send(validation.error.format())

    const { name } = request.body;
    const artist = await addArtist(name)

    return response.send(artist);
})

router.get('/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    const notFound = 'Artist not found'
    if (isNaN(id)) return response.status(404).send(notFound)

    const artist = await findArtist(id)
    if (!artist) return response.status(404).send(notFound)

    return response.send(artist)
})

router.put('/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    const notFound = 'Artist not found'
    if (isNaN(id)) return response.status(404).send(notFound)

    const artist = await findArtist(id)
    if (!artist) return response.status(404).send(notFound)

    const { name } = request.body

    const updatedArtist = await updateArtist({ id, name })

    return response.send(updatedArtist)
})

router.delete('/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    const notFound = 'Artist not found'
    if (isNaN(id)) return response.status(404).send(notFound)

    const artist = await findArtist(id)
    if (!artist) return response.status(404).send(notFound)

    const deletedArtist = await deleteArtist(id)

    return response.send(deletedArtist)
})

export default router