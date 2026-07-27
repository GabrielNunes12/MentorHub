import { Link } from 'react-router-dom'
import { useBooking } from '../hooks/useBooking'
import { BookingModal } from '../components/BookingModal'
import { useUserRegion } from '../hooks/usePricing'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'
import { pricingStructure } from '../data/pricing'

import SEO from '../components/SEO'

const Services = () => {
  const { openBooking, closeBooking, confirmBooking, isModalOpen, selectedService } = useBooking()
  const { region, currency, convertPrice } = useUserRegion()
  const { t, translations } = useLanguage()

  const services = translations.services.cards.map((card, index) => {
    const prices = pricingStructure[index]
    let finalPrice = prices.US // Default to US

    if (region === 'BR') finalPrice = prices.BR
    else if (region === 'EU') finalPrice = prices.EU
    else if (region === 'US') finalPrice = prices.US
    else finalPrice = convertPrice(prices.US) // Fallback for UK/Other using conversion strategy

    return {
      id: index + 1,
      ...card,
      displayPrice: finalPrice,
      basePrice: prices.US // Keep track of base for reference if needed
    }
  })

  return (
    <div className="w-full">
      <SEO
        title="Our Game Development Services"
        description="Choose the perfect mentorship package to level up your game development skills."
        canonical={`${window.location.origin}/services`}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="flex items-center justify-center space-x-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 tracking-tighter">
              <PathNode variant="professional" size="lg" className="flex-shrink-0" />
              <span>{translations.services.hero.title}</span>
              <span className="bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">{translations.services.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('services.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region Selector and Indicator */}
          <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  {t('services.regionIndicator.currency')}: {currency.symbol} {currency.code}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {region === 'BR' && t('services.regionIndicator.br')}
                  {region === 'EU' && t('services.regionIndicator.eu')}
                  {region === 'UK' && t('services.regionIndicator.uk')}
                  {region === 'US' && t('services.regionIndicator.us')}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-semibold">{t('services.regionIndicator.changeRegion')}</p>
                <div className="flex gap-2">
                  {[
                    { code: 'US', flag: '🇺🇸' },
                    { code: 'BR', flag: '🇧🇷' },
                    { code: 'EU', flag: '🇪🇺' },
                    { code: 'UK', flag: '🇬🇧' },
                  ].map(({ code, flag }) => (
                    <button
                      key={code}
                      onClick={() => {
                        localStorage.setItem('userRegion', code)
                        window.location.href = window.location.href
                      }}
                      className={`px-3 py-2 rounded text-lg transition-all ${region === code
                        ? 'bg-gaming text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      title={code}
                    >
                      {flag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group overflow-hidden transition-all duration-300 hover:-translate-y-2 ${service.popular
                  ? 'bg-gradient-to-br from-gaming to-professional text-slate-50 shadow-lg'
                  : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-2 left-2 bg-amber-500 text-slate-900 px-3 py-1 text-xs font-bold rounded-full shadow">
                    {t('services.mostPopular')}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="flex items-center space-x-3 text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50">
                    <PathNode variant="professional" size="md" className="flex-shrink-0" />
                    <span>{service.name}</span>
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-center space-x-3 text-3xl font-bold mb-2 bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">
                      <PathNode variant="connection" size="md" className="flex-shrink-0" />
                      <span>{currency.symbol}{service.displayPrice}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {service.duration}
                      {region !== 'US' && <span className="ml-1 text-xs">({region})</span>}
                    </p>
                  </div>

                  <p className="mb-6 text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <PathNode variant="connection" size="sm" className="text-amber-500" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openBooking(service.name, service.id)}
                      className={`flex-1 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${service.popular
                        ? 'bg-slate-50 text-slate-900 hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-900'
                        : 'bg-gaming text-slate-50 hover:bg-gaming/10'
                        }`}
                    >
                      {t('services.buttons.scheduleNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {translations.services.comparison.items.length > 0 && (
        <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center justify-center space-x-6 text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
              <PathNode variant="professional" size="lg" className="flex-shrink-0" />
              <span>{t('services.comparison.title')}</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="py-4 px-4 text-left font-medium text-slate-900 dark:text-slate-50">{t('services.comparison.features')}</th>
                    <th className="py-4 px-4 text-center text-slate-900 dark:text-slate-50">{t('services.comparison.careerCoaching')}</th>
                    <th className="py-4 px-4 text-center text-slate-900 dark:text-slate-50">{t('services.comparison.resumeReview')}</th>
                    <th className="py-4 px-4 text-center text-slate-900 dark:text-slate-50">{t('services.comparison.interviewPrep')}</th>
                    <th className="py-4 px-4 text-center text-slate-900 dark:text-slate-50">{t('services.comparison.monthlyRetainer')}</th>
                  </tr>
                </thead>
                <tbody>
                  {translations.services.comparison.items.map((item: any, index: number) => (
                    <tr key={index} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                      <td className="py-4 px-4 font-medium text-slate-900 dark:text-slate-50">
                        {item.feature}
                      </td>
                      <td className="py-4 px-4 text-center text-lg">{item.careerCoaching ? '✓' : '✕'}</td>
                      <td className="py-4 px-4 text-center text-lg">{item.resumeReview ? '✓' : '✕'}</td>
                      <td className="py-4 px-4 text-center text-lg">{item.interviewPrep ? '✓' : '✕'}</td>
                      <td className="py-4 px-4 text-center text-lg">{item.monthlyRetainer ? '✓' : '✕'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-gaming to-professional dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/5 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/5 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="flex items-center justify-center space-x-6 text-4xl font-bold text-slate-50 mb-6">
            <PathNode variant="connection" size="lg" className="flex-shrink-0" />
            <span>{t('services.cta.title')}</span>
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-400 mb-8">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold bg-slate-50 text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <PathNode variant="professional" size="md" className="mr-3" />
              {t('services.cta.button')}
            </Link>
            <button
              onClick={() => openBooking(services.find(s => !s.popular)?.name || services[0].name, services.find(s => !s.popular)?.id || 1)}
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-slate-50 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <PathNode variant="gaming" size="md" className="mr-3" />
              {t('services.cta.button')}
            </button>
          </div>
        </div>
      </section>
      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBooking}
        onConfirm={confirmBooking}
        serviceName={selectedService}
        price={services.find(s => s.name === selectedService)?.displayPrice || 0}
        currencySymbol={currency.symbol}
        currencyCode={currency.code}
      />
    </div>
  )
}

export default Services
