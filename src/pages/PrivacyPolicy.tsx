import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'
import SEO from '../components/SEO'

const PrivacyPolicy = () => {
    const { t, translations } = useLanguage()
    const content = translations.privacyPolicy?.content || { sections: [] }

    return (
        <div className="w-full pt-20 pb-20 relative overflow-hidden">
            <SEO
                title="Privacy Policy"
                description="Read our privacy policy regarding data collection and protection for our mentorship services."
                canonical={`${window.location.origin}/privacy-policy`}
            />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:py-8">
                <div className="mb-12 text-center">
                    <h1 className="flex items-center justify-center space-x-6 text-4xl font-bold text-slate-900 dark:text-slate-50">
                        <PathNode variant="professional" size="lg" />
                        <span>{t('privacyPolicy.title')}</span>
                    </h1>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-lg p-8">
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        {content.intro}
                    </p>

                    <div className="space-y-8">
                        {content.sections?.map((section: { heading: string; body: string }) => (
                            <div key={section.heading}>
                                <h2 className="flex items-center space-x-4 text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                                    <PathNode variant="connection" size="md" className="flex-shrink-0" />
                                    <span>{section.heading}</span>
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                        {content.lastUpdated}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
