import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'
import SEO from '../components/SEO'

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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4">
            <SEO
                title="Payment Successful"
                description="Your mentorship session has been successfully booked."
                noindex={true}
            />
            <div className="relative z-10 max-w-md w-full bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-xl text-center">
                {status === 'loading' && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-center">
                            <PathNode variant="connection" size="lg" className="animate-spin border-4 border-gaming/50" />
                        </div>
                        <p className="text-base text-slate-600 dark:text-slate-400 font-medium">{t('successPage.loading')}</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-center">
                            <PathNode variant="professional" size="lg" className="text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{t('successPage.title')}</h1>
                        <p className="text-base text-slate-600 dark:text-slate-400">
                            {t('successPage.confirmationPrefix')} <strong className="bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">{bookingDetails?.serviceName}</strong> {t('successPage.confirmationSuffix')}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            {t('successPage.emailSent')}
                        </p>
                        <Link
                            to="/"
                            className="flex items-center justify-center w-full py-3 text-lg font-semibold bg-gaming text-slate-50 hover:bg-gaming/10 rounded-xl"
                        >
                            <PathNode variant="professional" size="md" className="mr-3" />
                            {t('successPage.returnHome')}
                        </Link>
                    </div>
                )}

                {status === 'error' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-center">
                            <PathNode variant="connection" size="lg" className="text-red-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{t('successPage.errorTitle')}</h1>
                        <p className="text-base text-slate-600 dark:text-slate-400">
                            {t('successPage.errorMessagePrefix')} {sessionId?.slice(0, 8)}...
                        </p>
                        <Link
                            to="/contact"
                            className="flex items-center justify-center w-full py-3 text-lg font-semibold border-2 border-slate-50 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-xl"
                        >
                            <PathNode variant="connection" size="md" className="mr-3" />
                            {t('successPage.contactSupport')}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Success
