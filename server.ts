import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import handler from './api/notify-calendar'
import createCheckoutSession from './api/create-checkout-session'
import verifyPayment from './api/verify-payment'

dotenv.config({ path: '.env.local' })

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/notify-calendar', async (req, res) => {
    try {
        // Keeping this for backward compatibility or testing if needed, but planned to remove frontend usage
        await handler(req as any, res as any)
    } catch (error) {
        console.error('Error in API handler:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.post('/api/create-checkout-session', async (req, res) => {
    try {
        await createCheckoutSession(req as any, res as any)
    } catch (error) {
        console.error('Error in checkout handler:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.post('/api/verify-payment', async (req, res) => {
    try {
        await verifyPayment(req as any, res as any)
    } catch (error) {
        console.error('Error in verify payment handler:', error)
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
