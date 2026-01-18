import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { serviceName, amount, currency, date, time, userEmail, serviceId } = req.body

    if (!process.env.STRIPE_SECRET_KEY) {
        return res.status(500).json({ error: 'Missing Stripe Secret Key' })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2025-12-15.clover', // Use latest or pinning version
    })

    try {
        // Construct detailed description
        const description = `Mentorship Session: ${serviceName} on ${new Date(date).toLocaleDateString()} at ${time}`

        // Create Checkout Session
        // Use the Origin header to redirect back to the frontend (e.g. localhost:5173)
        // Fallback to referer or explicit host if origin is missing.
        const origin = req.headers.origin || req.headers.referer || 'http://localhost:5173'

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: currency || 'usd',
                        product_data: {
                            name: serviceName,
                            description: description,
                        },
                        unit_amount: Math.round(amount * 100), // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/`, // Or correct booking page
            customer_email: userEmail,
            metadata: {
                serviceName,
                date,
                time,
                serviceId: serviceId?.toString(),
            },
        })

        return res.status(200).json({ url: session.url })
    } catch (error: any) {
        console.error('Stripe Checkout Error:', error)
        return res.status(500).json({ error: error.message || 'Failed to create checkout session' })
    }
}
