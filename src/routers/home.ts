import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (_: Request, response: Response) => {
    return response.send('Welcome to the Music API')
})

export default router