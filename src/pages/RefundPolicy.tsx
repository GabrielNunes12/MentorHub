import { useLanguage } from '../hooks/useLanguage'

import SEO from '../components/SEO'

const RefundPolicy = () => {
    const { t, translations } = useLanguage()
    const refundContent = translations.refundPolicy?.content || { conditions: [] }

    return (
        <div className="w-full pt-20 pb-20">
            <SEO
                title="Refund Policy"
                description="Read our refund policy regarding mentorship sessions and rescheduling."
                canonical={`${window.location.origin}/refund-policy`}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                    {t('refundPolicy.title')}
                </h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {refundContent.intro}
                    </p>

                    <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                        {refundContent.conditions.map((condition: string, index: number) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>

                    <p className="text-gray-600 dark:text-gray-300">
                        {refundContent.contact} <a href={`mailto:${t('common.contactEmail')}`} className="text-blue-600 hover:text-blue-700 font-medium">{t('common.contactEmail')}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RefundPolicy
