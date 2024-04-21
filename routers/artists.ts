import { Request, Response, Router } from 'express'
import { addArtist, getArtists } from '../actions/artist'

const router = Router()

router.get('/', async (_: Request, response: Response) => {
    const artists = await getArtists()

    return response.send(artists)
})

router.post('/', async (request: Request, response: Response) => {
    const { name } = request.body;
    const artist = await addArtist(name)

    return response.send(artist);
})

export default router