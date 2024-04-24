import { Router, Request, Response } from 'express'
import { getSongs } from '../actions/songs';

const router = Router()

router.get('/', async (_: Request, response: Response) => {
    const songs = await getSongs()
    return response.send(songs)
})

export default router