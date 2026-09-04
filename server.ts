import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import contact from './api/contact'

dotenv.config({ path: '.env.local' })

const app = express()

app.use(helmet())
app.use(cors({
    origin: ['http://localhost:5173', 'https://mentor-hub.space'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
    try {
        await contact(req as any, res as any)
    } catch (error) {
        console.error('Error in contact handler:', error)
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
