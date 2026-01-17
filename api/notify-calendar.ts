import type { VercelRequest, VercelResponse } from '@vercel/node'
import { google } from 'googleapis'

// NOTE: You need to set these environment variables in Vercel
// GOOGLE_CLIENT_EMAIL
// GOOGLE_PRIVATE_KEY
// GOOGLE_CALENDAR_ID

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { serviceName, date, time, userEmail } = req.body

    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CALENDAR_ID) {
        console.error('Missing Google Credentials')
        // For now, we return success to not block the flow if credentials are missing
        return res.status(200).json({ message: 'Notification skipped (missing credentials)' })
    }

    try {
        // Clean up the private key
        // 1. Remove surrounding double quotes if present
        // 2. Replace literal \n with actual newlines
        // 3. Ensure it looks like a valid PEM key
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

        // Parse date and time to create start/end ISO strings
        // Assuming date is ISO string and time is "HH:MM"
        const startDate = new Date(date)
        const [hours, minutes] = time.split(':')
        startDate.setHours(parseInt(hours), parseInt(minutes))

        const endDate = new Date(startDate)
        endDate.setHours(startDate.getHours() + 1) // Default 1 hour duration

        await calendar.events.insert({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            requestBody: {
                summary: `Mentorship: ${serviceName}`,
                description: `Booking for ${serviceName}`,
                start: { dateTime: startDate.toISOString() },
                end: { dateTime: endDate.toISOString() },
                attendees: userEmail ? [{ email: userEmail }] : undefined,
            },
        })

        return res.status(200).json({ message: 'Calendar event created' })
    } catch (error) {
        console.error('Error creating calendar event:', error)
        return res.status(500).json({ error: 'Failed to create calendar event' })
    }
}
