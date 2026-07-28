import { google } from 'googleapis'

export function hasGoogleCalendarCredentials(): boolean {
    return Boolean(
        process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_CALENDAR_ID
    )
}

export function getGoogleCalendarClient() {
    // Clean up the private key
    // 1. Remove surrounding double quotes if present
    // 2. Replace literal \n with actual newlines
    // 3. Ensure it looks like a valid PEM key
    let privateKey = process.env.GOOGLE_PRIVATE_KEY as string
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
        privateKey = privateKey.slice(1, -1)
    }
    privateKey = privateKey.replace(/\\n/g, '\n')

    const jwtClient = new google.auth.JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/calendar'],
    })

    return google.calendar({ version: 'v3', auth: jwtClient })
}

// Parse date and time to create start/end ISO strings
// Assuming date is ISO string and time is "HH:MM"
export function getBookingWindow(date: string, time: string) {
    const startDate = new Date(date)
    const [hours, minutes] = time.split(':')
    startDate.setHours(Number.parseInt(hours), Number.parseInt(minutes))

    const endDate = new Date(startDate)
    endDate.setHours(startDate.getHours() + 1) // Default 1 hour duration

    return { startDate, endDate }
}
