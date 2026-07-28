import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getBookingWindow, getGoogleCalendarClient, hasGoogleCalendarCredentials } from './_lib/googleCalendar'

// NOTE: You need to set these environment variables in Vercel
// GOOGLE_CLIENT_EMAIL
// GOOGLE_PRIVATE_KEY
// GOOGLE_CALENDAR_ID

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { serviceName, date, time, userEmail } = req.body

    if (!hasGoogleCalendarCredentials()) {
        console.error('Missing Google Credentials')
        // For now, we return success to not block the flow if credentials are missing
        return res.status(200).json({ message: 'Notification skipped (missing credentials)' })
    }

    try {
        const calendar = getGoogleCalendarClient()
        const { startDate, endDate } = getBookingWindow(date, time)

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
