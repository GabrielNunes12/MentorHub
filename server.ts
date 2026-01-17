import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import handler from './api/notify-calendar'

dotenv.config({ path: '.env.local' })

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/notify-calendar', async (req, res) => {
    try {
        await handler(req as any, res as any)
    } catch (error) {
        console.error('Error in API handler:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err)
})
