import { useLanguage } from '../hooks/useLanguage'
import SEO from '../components/SEO'

const RefundPolicy = () => {
    const { t, translations } = useLanguage()
    const refundContent = translations.refundPolicy?.content || { conditions: [] }

    return (
        <div className="w-full pt-20 pb-20 relative overflow-hidden bg-bg">
            <SEO
                title="Refund Policy"
                description="Read our refund policy regarding outsourced project engagements."
                canonical={`${window.location.origin}/refund-policy`}
            />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-3xl font-display font-bold text-ink">
                        {t('refundPolicy.title')}
                    </h1>
                </div>

                <div className="bg-surface border border-edge rounded-2xl p-8">
                    <p className="text-base text-muted mb-6 leading-relaxed">
                        {refundContent.intro}
                    </p>

                    <ol className="list-decimal pl-8 space-y-4 mb-8 text-muted">
                        {refundContent.conditions.map((condition: string, index: number) => (
                            <li key={condition} className="flex flex-col space-y-1">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 border border-games text-games rounded-full text-sm font-medium">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">{condition}</div>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <p className="text-base text-muted">
                        <span className="block mb-1">{refundContent.contact}</span>
                        <a href={`mailto:${t('common.contactEmail')}`} className="text-muted hover:text-games font-medium">
                            {t('common.contactEmail')}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RefundPolicy
