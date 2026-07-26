import myPhoto from '../assets/images/photo-pica.png'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'

import SEO from '../components/SEO'

const About = () => {
  const { t, translations } = useLanguage()
  const timeline = translations.about.timeline.events
  const expertise = translations.about.expertise.items
  const profile = translations.about.profile

  return (
    <div className="w-full">
      <SEO
        title="About MentorHub"
        description="Learn about MentorHub, a segregation platform offering specialized paths for gaming excellence and professional growth."
        canonical={`${window.location.origin}/about`}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 to-slate-50 dark:from-slate-950 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="flex items-center justify-center space-x-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 tracking-tighter">
              <PathNode variant="professional" size="lg" className="flex-shrink-0" />
              <span>{t('about.hero.title')}</span>
              <span className="bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">{t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming/10 to-professional/10 rounded-2xl blur-3xl"></div>
              <img
                src={myPhoto}
                alt={profile.name}
                className="relative w-full h-full object-cover object-top rounded-2xl shadow-2xl border-4 border-slate-200 dark:border-slate-800"
              />
              {/* Decorative path elements */}
              <div className="absolute left-0 top-0 h-full w-full pointer-events-none">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-gaming via-transparent to-professional"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-professional via-transparent to-gaming"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="flex items-center space-x-4 text-4xl font-bold text-slate-900 dark:text-slate-50">
                <PathNode variant="professional" size="lg" className="flex-shrink-0" />
                <span>{t('about.profile.name')}</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.profile.bio1')}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.profile.bio2')}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.profile.bio3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center space-x-6 text-4xl font-bold text-slate-900 dark:text-slate-50 mb-16">
            <PathNode variant="connection" size="lg" className="flex-shrink-0" />
            <span>{t('about.timeline.title')}</span>
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-gaming via-transparent to-professional"></div>

            <div className="relative space-y-8 pl-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline point */}
                  <div className="absolute left-0 -translate-x-1/2 top-0">
                    <div className={`${index % 2 === 0 ? 'bg-gaming' : 'bg-professional'} w-8 h-8 rounded-full flex items-center justify-center text-slate-50 text-xs font-bold`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Timeline content */}
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                      {item.year}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center space-x-6 text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
            <PathNode variant="professional" size="lg" className="flex-shrink-0" />
            <span>{t('about.expertise.title')}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="group flex-1 min-w-[280px] bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gaming to-professional rounded-xl">
                  <PathNode variant={index % 2 === 0 ? 'gaming' : 'professional'} size="md" className="text-slate-50" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
