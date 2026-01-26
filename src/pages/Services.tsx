import { Link } from 'react-router-dom'
import { useBooking } from '../hooks/useBooking'
import { BookingModal } from '../components/BookingModal'
import { useUserRegion } from '../hooks/usePricing'
import { useLanguage } from '../hooks/useLanguage'
import { pricingStructure } from '../data/pricing'

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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {translations.services.hero.title} <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{translations.services.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('services.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region Selector and Indicator */}
          <div className="mb-12 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  {t('services.regionIndicator.currency')}: {currency.symbol} {currency.code}
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {region === 'BR' && t('services.regionIndicator.br')}
                  {region === 'EU' && t('services.regionIndicator.eu')}
                  {region === 'UK' && t('services.regionIndicator.uk')}
                  {region === 'US' && t('services.regionIndicator.us')}
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-2 font-semibold">{t('services.regionIndicator.changeRegion')}</p>
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
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700'
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${service.popular
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
              >
                {service.popular && (
                  <div className="bg-yellow-400 text-gray-900 py-2 px-4 font-bold text-center text-sm">
                    {t('services.mostPopular')}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>

                  <div className="mb-4">
                    <div className="text-4xl font-bold mb-2">
                      {currency.symbol}{service.displayPrice}
                    </div>
                    <p className={`text-sm ${service.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                      {service.duration}
                      {region !== 'US' && <span className="ml-2 text-xs">({region})</span>}
                    </p>
                  </div>

                  <p className={`mb-6 ${service.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-xl">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    <button
                      onClick={() => openBooking(service.name, service.id)}
                      className={`flex-1 py-3 rounded-lg font-semibold text-center transition-colors ${service.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
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
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {t('services.comparison.title')}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                    <th className="py-4 px-4 font-bold text-gray-900 dark:text-white">{t('services.comparison.features')}</th>
                    <th className="py-4 px-4 text-center text-gray-900 dark:text-white">{t('services.comparison.careerCoaching')}</th>
                    <th className="py-4 px-4 text-center text-gray-900 dark:text-white">{t('services.comparison.resumeReview')}</th>
                    <th className="py-4 px-4 text-center text-gray-900 dark:text-white">{t('services.comparison.interviewPrep')}</th>
                    <th className="py-4 px-4 text-center text-gray-900 dark:text-white">{t('services.comparison.monthlyRetainer')}</th>
                  </tr>
                </thead>
                <tbody>
                  {translations.services.comparison.items.map((item: any, index: number) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {t('services.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            {t('services.cta.button')}
          </Link>
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
