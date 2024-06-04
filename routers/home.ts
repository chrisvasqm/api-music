import { Router } from 'express'

const router = Router()

router.get('/', (_, response) => {
    return response.send('Welcome to the Music API')
})

export default router