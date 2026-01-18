import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

const Success = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
    const [bookingDetails, setBookingDetails] = useState<any>(null)
    const { t } = useLanguage()

    useEffect(() => {
        if (!sessionId) {
            setStatus('error')
            return
        }

        const verifyPayment = async () => {
            try {
                const response = await fetch('/api/verify-payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ sessionId }),
                })

                const data = await response.json()

                if (response.ok && data.success) {
                    setStatus('success')
                    setBookingDetails(data.booking)
                } else {
                    console.error('Verification failed:', data)
                    setStatus('error')
                }
            } catch (err) {
                console.error('Network error:', err)
                setStatus('error')
            }
        }

        verifyPayment()
    }, [sessionId])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
                {status === 'loading' && (
                    <div className="space-y-4">
                        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Verifying your payment...</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="space-y-6">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-4xl">✅</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payment Successful!</h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Your mentorship session for <strong>{bookingDetails?.serviceName}</strong> has been confirmed.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            We have sent a calendar invitation to your email.
                        </p>
                        <Link
                            to="/"
                            className="inline-block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                        >
                            Return Home
                        </Link>
                    </div>
                )}

                {status === 'error' && (
                    <div className="space-y-6">
                        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-4xl">❌</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Something went wrong</h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            We couldn't verify your payment details using session: {sessionId?.slice(0, 8)}...
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            Contact Support
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Success
