import { Link } from 'react-router-dom'
import { useCalendly } from '../hooks/useCalendly'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'
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
        title="Unlock Your Potential"
        description="Choose your path: Gaming excellence or professional growth through our specialized platforms."
        canonical={window.location.origin}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 min-h-[90vh]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-50/30 via-transparent to-transparent dark:from-slate-900/20"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50/30 via-transparent to-transparent dark:from-slate-900/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="flex items-center space-x-4 text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tighter">
                <PathNode variant="professional" size="lg" className="flex-shrink-0" />
                <span>{t('home.hero.title')}</span>
                <span className="bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">{t('home.hero.titleHighlight')}</span>
                <span>{t('home.hero.subtitle')}</span>
              </h1>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('home.hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => openCalendly()}
                  className="flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-gaming to-professional text-slate-50 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-1 sm:w-auto"
                >
                  <PathNode variant="professional" size="md" className="mr-3" />
                  {t('home.hero.cta1')}
                </button>
                <Link
                  to="/services"
                  className="flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-gaming/50 bg-gaming/5 hover:bg-gaming/10 text-gaming rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-1 sm:w-auto"
                >
                  <PathNode variant="gaming" size="md" className="mr-3" />
                  {t('home.hero.cta2')}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-gaming to-professional border-2 border-slate-50 dark:border-slate-800 flex items-center justify-center text-slate-900 font-semibold shadow-sm"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-slate-50">20+</span> {t('home.hero.trustIndicator')}
                </p>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-96 md:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming/10 to-professional/10 rounded-2xl blur-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={mentorHubLogo}
                  alt="MentorHub Logo"
                  className="w-96 h-96 object-contain drop-shadow-lg"
                />
                {/* Path visualization */}
                <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-gaming via-transparent to-professional"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-professional via-transparent to-gaming"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <PathNode variant="connection" size="lg" className="mr-3" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center space-x-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
              <PathNode variant="professional" size="lg" />
              <span>{t('home.features.title')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gaming to-professional rounded-xl">
                    <PathNode variant={index % 2 === 0 ? 'gaming' : 'professional'} size="lg" className="text-slate-50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-gaming to-professional dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/5 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/5 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="flex items-center justify-center space-x-4 text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            <PathNode variant="connection" size="lg" />
            <span>{t('home.cta.title')}</span>
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-400 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => openCalendly()}
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold bg-slate-50 text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <PathNode variant="professional" size="md" className="mr-3" />
              {t('home.cta.button')}
            </button>
            <Link
              to="/services"
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-slate-50 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <PathNode variant="gaming" size="md" className="mr-3" />
              {t('home.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
