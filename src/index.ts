import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/', (_: Request, response: Response) => {
    return response.send('Welcome to the Music API')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Music API started on port ${PORT}`)
})