import { Link } from 'react-router-dom'
import { useCalendly } from '../hooks/useCalendly'
import { useLanguage } from '../hooks/useLanguage'
import mentorHubLogo from '../assets/images/mentorHub-Logo.png'

import SEO from '../components/SEO'

const Home = () => {
  const { openCalendly } = useCalendly()
  const { t, translations } = useLanguage()

  const stats = translations.home.stats
  const features = translations.home.features.items

  return (
    <div className="w-full">
      <SEO
        title="Career Mentorship for Developers"
        description="Get personalized mentorship from an experienced Tech Lead. Accelerate your career in Backend or Frontend development with MentorHubTech."
        canonical={window.location.origin}
      />
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('home.hero.title')} <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{t('home.hero.titleHighlight')}</span> {t('home.hero.subtitle')}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('home.hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openCalendly()}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  {t('home.hero.cta1')}
                </button>
                <Link
                  to="/services"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 text-center"
                >
                  {t('home.hero.cta2')}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-gray-900 font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">20+</span> {t('home.hero.trustIndicator')}
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-96 md:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 rounded-2xl opacity-10 blur-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={mentorHubLogo}
                  alt="MentorHubTech Logo"
                  className="w-96 h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MentorHubTech Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('mentorhubtech.section.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('mentorhubtech.section.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/mentorhubtech/studios" className="block p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">{t('mentorhubtech.studios.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('mentorhubtech.studios.subtitle')}</p>
            </Link>

            <Link to="/mentorhubtech/it" className="block p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">{t('mentorhubtech.it.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('mentorhubtech.it.subtitle')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-slate-900 dark:to-gray-900 dark:border-t dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <button
            onClick={() => openCalendly()}
            className="inline-block px-8 py-4 bg-primary text-gray-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors duration-300"
          >
            {t('home.cta.button')}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
