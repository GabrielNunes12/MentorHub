import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// NOTE: You need to set these environment variables in Vercel
// GMAIL_USER          - the Gmail address used to send the notification (e.g. your account)
// GMAIL_APP_PASSWORD  - a Gmail App Password for that account (not your regular password)
// CONTACT_EMAIL       - optional, where the notification is delivered (defaults to GMAIL_USER)

const schema = z.object({
    name: z.string().min(1).max(200),
    email: z.string().email(),
    phone: z.string().max(50).optional(),
    subject: z.string().min(1).max(300),
    message: z.string().min(1).max(5000),
})

function hasGmailCredentials(): boolean {
    return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const data = schema.parse(req.body)

        if (!hasGmailCredentials()) {
            console.error('Missing Gmail SMTP credentials')
            return res.status(500).json({ error: 'Email service not configured' })
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        await transporter.sendMail({
            from: `"MentorHub Contact Form" <${process.env.GMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
            replyTo: data.email,
            subject: `New contact message: ${data.subject}`,
            text: [
                'You got a new message from the MentorHub contact form.',
                '',
                `Name: ${data.name}`,
                `Email: ${data.email}`,
                `Phone: ${data.phone || 'Not provided'}`,
                `Subject: ${data.subject}`,
                '',
                'Message:',
                data.message,
            ].join('\n'),
            html: `
                <p>You got a new message from the MentorHub contact form.</p>
                <p>
                    <strong>Name:</strong> ${data.name}<br />
                    <strong>Email:</strong> ${data.email}<br />
                    <strong>Phone:</strong> ${data.phone || 'Not provided'}<br />
                    <strong>Subject:</strong> ${data.subject}
                </p>
                <p><strong>Message:</strong></p>
                <p>${data.message.replace(/\n/g, '<br />')}</p>
            `,
        })

        return res.status(200).json({ success: true, message: 'Message sent' })
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error('Validation Error:', error.errors)
            return res.status(400).json({ error: 'Invalid input data', details: error.errors })
        }
        console.error('Error sending contact notification:', error)
        return res.status(500).json({ error: 'Failed to send message' })
    }
}
