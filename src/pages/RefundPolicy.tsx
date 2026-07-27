import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'
import SEO from '../components/SEO'

const RefundPolicy = () => {
    const { t, translations } = useLanguage()
    const refundContent = translations.refundPolicy?.content || { conditions: [] }

    return (
        <div className="w-full pt-20 pb-20 relative overflow-hidden">
            <SEO
                title="Refund Policy"
                description="Read our refund policy regarding mentorship sessions and rescheduling."
                canonical={`${window.location.origin}/refund-policy`}
            />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="flex items-center justify-center space-x-6 text-4xl font-bold text-slate-900 dark:text-slate-50">
                        <PathNode variant="professional" size="lg" />
                        <span>{t('refundPolicy.title')}</span>
                    </h1>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg p-8">
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {refundContent.intro}
                    </p>

                    <ol className="list-decimal pl-8 space-y-4 mb-8 text-slate-600 dark:text-slate-400">
                        {refundContent.conditions.map((condition: string, index: number) => (
                            <li key={condition} className="flex flex-col space-y-1">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-gaming/20 text-gaming rounded-full text-sm font-medium">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">{condition}</div>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <p className="text-base text-slate-600 dark:text-slate-400">
                        <span className="flex items-center space-x-2">
                            <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                            <span>{refundContent.contact}</span>
                        </span>
                        <a href={`mailto:${t('common.contactEmail')}`} className="text-slate-600 dark:text-slate-400 hover:text-slate-400/70 font-medium">
                            {t('common.contactEmail')}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RefundPolicy
