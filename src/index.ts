import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())
app.use('/', (_: Request, response: Response) => {
    return response.send('Welcome to the Music API')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Music API started on port ${PORT}`)
})