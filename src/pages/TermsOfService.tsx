import { useLanguage } from '../hooks/useLanguage'
import SEO from '../components/SEO'

const TermsOfService = () => {
    const { t, translations } = useLanguage()
    const content = translations.termsOfService?.content || { sections: [] }

    return (
        <div className="w-full pt-20 pb-20">
            <SEO
                title="Terms of Service"
                description="Read our terms of service and conditions for using our platform."
                canonical={`${window.location.origin}/terms-of-service`}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                    {t('termsOfService.title')}
                </h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {content.intro}
                    </p>

                    <div className="space-y-8">
                        {content.sections?.map((section: any, index: number) => (
                            <div key={index}>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {section.heading}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        {content.lastUpdated}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TermsOfService
