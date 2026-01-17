import { useState } from 'react'

const STRIPE_LINKS: Record<number, string> = {
    1: 'https://buy.stripe.com/aFa7sN65tdW28nX0Fx87K02', // Career Coaching
    2: 'https://buy.stripe.com/3cI6oJbpN6tAdIh87Z87K00', // Resume & LinkedIn Review
    3: 'https://buy.stripe.com/cNicN7bpNcRY9s1ewn87K01', // Interview Preparation
    4: 'https://buy.stripe.com/fZubJ365t7xEeMl87Z87K05', // Salary Negotiation
    5: 'https://buy.stripe.com/00w6oJalJ2dk1Zzbkb87K04', // Leadership Mentorship
    6: 'https://buy.stripe.com/7sYdRbbpN9FM33Ddsj87K03'  // Monthly Retainer
}

export const useBooking = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<string>('')
    const [selectedServiceId, setSelectedServiceId] = useState<number>(0)

    const openBooking = (serviceName: string, serviceId: number) => {
        setSelectedService(serviceName)
        setSelectedServiceId(serviceId)
        setIsModalOpen(true)
    }

    const closeBooking = () => {
        setIsModalOpen(false)
        setSelectedService('')
        setSelectedServiceId(0)
    }

    const confirmBooking = async (date: Date, time: string) => {
        try {
            // Notify Google Calendar
            await fetch('/api/notify-calendar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    serviceName: selectedService,
                    date: date.toISOString(),
                    time,
                }),
            })
        } catch (error) {
            console.error('Failed to notify calendar:', error)
            // Continue to payment even if notification fails
        }

        console.log('Booking confirmed:', { service: selectedService, date, time })

        // Redirect to Stripe
        const stripeUrl = STRIPE_LINKS[selectedServiceId]
        if (stripeUrl) {
            window.location.href = stripeUrl
        } else {
            console.error('No Stripe link found for service ID:', selectedServiceId)
            alert('Payment link not available for this service yet.')
        }
    }

    return {
        isModalOpen,
        selectedService,
        openBooking,
        closeBooking,
        confirmBooking
    }
}
