import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import artistRouter from './routers/artists'
import homeRouter from './routers/home'
import albumRouter from './routers/albums'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/', homeRouter)
app.use('/api/artists', artistRouter)
app.use('/api/albums', albumRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Music API started on http://localhost:${PORT}`)
})