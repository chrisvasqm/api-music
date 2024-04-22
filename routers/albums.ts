import { Router, Request, Response } from 'express'
import { getAlbumbs } from '../actions/album'

const router = Router()

router.get('/', async (_: Request, response: Response) => {
    const albums = await getAlbumbs();
    return response.send(albums)
})

export default router