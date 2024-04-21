import { Request, Response, Router } from 'express'
import { addArtist, findArtist, getArtists } from '../actions/artist'
import { z } from 'zod'

const router = Router()

const schema = z.object({
    name: z.string({ required_error: 'Name is required' }).min(1, 'Name must be at least 1 character long')
})

router.get('/', async (_: Request, response: Response) => {
    const artists = await getArtists()

    return response.send(artists)
})

router.post('/', async (request: Request, response: Response) => {
    const validation = schema.safeParse(request.body);
    if (!validation.success)
        return response.status(400).send(validation.error.format())

    const { name } = request.body;
    const artist = await addArtist(name)

    return response.send(artist);
})

router.get('/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    const artist = await findArtist(parseInt(id))

    return response.send(artist)
})

export default router