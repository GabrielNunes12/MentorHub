import { useState } from 'react'

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

    const confirmBooking = async (date: Date, time: string, servicePrice: number = 50) => { // Default price or fetch from config
        try {
            console.log('Initiating checkout for:', { service: selectedService, date, time })

            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    serviceName: selectedService,
                    serviceId: selectedServiceId,
                    amount: servicePrice, // You might want to map serviceId to actual prices securely on backend or here
                    currency: 'usd', // Default currency
                    date: date.toISOString(),
                    time,
                    userEmail: 'user@example.com', //Ideally get from user input or auth context
                }),
            })

            const data = await response.json()

            if (response.ok && data.url) {
                window.location.href = data.url
            } else {
                console.error('Failed to create checkout session:', data.error)
                alert('Failed to initiate payment. Please try again.')
            }

        } catch (error) {
            console.error('Error during checkout redirection:', error)
            alert('An unexpected error occurred.')
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
