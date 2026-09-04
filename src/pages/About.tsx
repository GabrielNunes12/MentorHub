import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'

import SEO from '../components/SEO'

const About = () => {
  const { t, translations } = useLanguage()
  const timeline = translations.about.timeline.events
  const disciplines = translations.about.disciplines.items

  return (
    <div className="w-full">
      <SEO
        title="About MentorHub"
        description="MentorHub is a small studio with two disciplines: original games we publish ourselves, and outsourced software delivery."
        canonical={`${window.location.origin}/about`}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">
              {t('about.hero.title')}{' '}
              <span className="text-games">{t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg text-muted mt-4">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Two disciplines */}
      <section className="relative py-16 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {disciplines.map((item, index) => (
              <div key={item.title} className="bg-surface border border-edge rounded-xl p-8">
                <div className={`font-mono text-xs mb-3 ${index === 0 ? 'text-games' : 'text-outsourcing'}`}>
                  {index === 0 ? '01 // GAMES' : '02 // OUTSOURCING'}
                </div>
                <h2 className="font-display text-2xl font-bold text-ink mb-3">
                  {item.title}
                </h2>
                <p className="text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink mb-16">
            {t('about.timeline.title')}
          </h2>
          <div className="relative max-w-4xl">
            {/* Vertical timeline line, aligned with the timeline dots below (pl-8) */}
            <div className="absolute left-8 -translate-x-1/2 top-0 h-full w-[2px] bg-edge"></div>

            <div className="relative space-y-8 pl-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative">
                  {/* Timeline point */}
                  <div className="absolute left-0 -translate-x-1/2 top-0">
                    <div className={`${index % 2 === 0 ? 'bg-games' : 'bg-outsourcing'} w-8 h-8 rounded-full flex items-center justify-center text-ink text-xs font-mono font-bold`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Timeline content */}
                  <div className="ml-8">
                    <h3 className="font-mono text-lg font-bold text-ink mb-2">
                      {item.year}
                    </h3>
                    <p className="text-sm text-muted">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative py-24 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink mb-12">
            {t('about.expertise.title')}
          </h2>
          <div className="flex flex-wrap gap-6">
            {translations.about.expertise.items.map((skill, index) => (
              <div
                key={skill}
                className="group flex-1 min-w-[240px] bg-surface border border-edge p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl border border-edge">
                  <PathNode variant={index % 2 === 0 ? 'games' : 'outsourcing'} size="md" />
                </div>
                <h3 className="font-mono text-base font-bold text-ink">
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
