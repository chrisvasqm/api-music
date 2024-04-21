import { Request, Response, Router, response } from 'express'
import { addArtist, findArtist, getArtists, updateArtist } from '../actions/artist'
import { z } from 'zod'

const router = Router()

const schema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .min(1, 'Name must be at least 1 character long')
})

router.get('/', async (_: Request, response: Response) => {
    const artists = await getArtists()

    return response.send(artists)
})

router.post('/', async (request: Request, response: Response) => {
    const validation = schema.safeParse(request.body);
    if (!validation.success) return response.status(400).send(validation.error.format())

    const { name } = request.body;
    const artist = await addArtist(name)

    return response.send(artist);
})

router.get('/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const notFound = 'Artist not found'
    if (isNaN(id)) return response.status(404).send(notFound)

    const artist = await findArtist(id)
    if (!artist) return response.status(404).send(notFound)

    return response.send(artist)
})

router.put('/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const notFound = 'Artist not found'
    if (isNaN(id)) return response.status(404).send(notFound)

    const artist = await findArtist(id)
    if (!artist) return response.status(404).send(notFound)

    const { name } = request.body

    const updatedArtist = await updateArtist({ id, name })

    return response.send(updatedArtist)
})

export default router