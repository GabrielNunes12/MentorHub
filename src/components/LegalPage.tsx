import { useLanguage } from '../hooks/useLanguage'
import PathNode from './PathNode'
import SEO from './SEO'

interface LegalPageProps {
    translationKey: 'privacyPolicy' | 'termsOfService'
    path: string
    seoTitle: string
    seoDescription: string
}

const LegalPage = ({ translationKey, path, seoTitle, seoDescription }: LegalPageProps) => {
    const { t, translations } = useLanguage()
    const content = translations[translationKey]?.content || { sections: [] }

    return (
        <div className="w-full pt-20 pb-20 relative overflow-hidden bg-bg">
            <SEO
                title={seoTitle}
                description={seoDescription}
                canonical={`${window.location.origin}${path}`}
            />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="flex items-center gap-4 text-3xl font-display font-bold text-ink">
                        <PathNode variant="outsourcing" size="lg" />
                        <span>{t(`${translationKey}.title`)}</span>
                    </h1>
                </div>

                <div className="bg-surface border border-edge rounded-2xl p-8">
                    <p className="text-base text-muted mb-8 leading-relaxed">
                        {content.intro}
                    </p>

                    <div className="space-y-8">
                        {content.sections?.map((section: { heading: string; body: string }) => (
                            <div key={section.heading}>
                                <h2 className="flex items-center gap-4 text-xl font-semibold text-ink mb-4">
                                    <PathNode variant="games" size="md" className="flex-shrink-0" />
                                    <span>{section.heading}</span>
                                </h2>
                                <p className="text-muted">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-dim mt-12 pt-8 border-t border-edge">
                        {content.lastUpdated}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LegalPage
