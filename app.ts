import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import artists from './routers/artists'
import home from './routers/home'
import albums from './routers/albums'
import songs from './routers/songs'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/', home)
app.use('/api/artists', artists)
app.use('/api/albums', albums)
app.use('/api/songs', songs)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Music API started on http://localhost:${PORT}`)
})