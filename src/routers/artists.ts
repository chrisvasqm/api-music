import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (_: Request, response: Response) => {
    const artists = [
        { id: 1, name: 'Logic' }
    ]

    return response.send(artists)
})

export default router