import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'
import { google } from 'googleapis'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { sessionId } = req.body

    if (!process.env.STRIPE_SECRET_KEY) {
        return res.status(500).json({ error: 'Missing Stripe Secret Key' })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2025-12-15.clover',
    })

    try {
        // 1. Retrieve session from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId)

        // 2. Verify payment status
        if (session.payment_status !== 'paid') {
            return res.status(400).json({ error: 'Payment not completed' })
        }

        // 3. Extract booking details from metadata
        const metadata = session.metadata
        if (!metadata) {
            return res.status(400).json({ error: 'Missing booking metadata' })
        }

        const { serviceName, date, time } = metadata
        const userEmail = session.customer_details?.email || session.customer_email
        const userName = session.customer_details?.name || 'Unknown Client'

        // 4. Create Calendar Event (only if paid)
        if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CALENDAR_ID) {
            console.error('Missing Google Credentials - Calendar event skipped')
            // Don't fail the verification response, but log it
            return res.status(200).json({ success: true, warning: 'Calendar skipped due to credentials', booking: metadata })
        }

        // ... (Logic from notify-calendar) ...
        let privateKey = process.env.GOOGLE_PRIVATE_KEY
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.slice(1, -1)
        }
        privateKey = privateKey.replace(/\\n/g, '\n')

        const jwtClient = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/calendar'],
        })

        const calendar = google.calendar({ version: 'v3', auth: jwtClient })

        const startDate = new Date(date)
        const [hours, minutes] = time.split(':')
        startDate.setHours(parseInt(hours), parseInt(minutes))
        const endDate = new Date(startDate)
        endDate.setHours(startDate.getHours() + 1)

        await calendar.events.insert({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            requestBody: {
                summary: `Mentorship: ${serviceName} - ${userName}`,
                description: `
                    Service: ${serviceName}
                    Client Name: ${userName}
                    Client Email: ${userEmail}
                    Date: ${new Date(date).toLocaleDateString()}
                    Time: ${time}
                `.trim(),
                start: { dateTime: startDate.toISOString() },
                end: { dateTime: endDate.toISOString() },
                // attendees: userEmail ? [{ email: userEmail }] : undefined, // Removed to avoid "Domain-Wide Delegation" error
            },
        })

        return res.status(200).json({ success: true, booking: metadata })

    } catch (error: any) {
        console.error('Payment Verification Error:', error)
        return res.status(500).json({ error: error.message || 'Failed to verify payment' })
    }
}
