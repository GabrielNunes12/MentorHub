import myPhoto from '../assets/images/my-photo.png'
import { useLanguage } from '../hooks/useLanguage'

const About = () => {
  const { t, translations } = useLanguage()
  const timeline = translations.about.timeline.events
  const expertise = translations.about.expertise.items
  const certifications = translations.about.certifications.items

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.hero.title')} <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-3xl"></div>
              <img
                src={myPhoto}
                alt="Gabriel Nunes"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {t('about.profile.name')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('about.profile.bio1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('about.profile.bio2')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('about.profile.bio3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            {t('about.timeline.title')}
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-cyan-600 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.year}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t('about.expertise.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-lg text-white font-semibold text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t('about.certifications.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
