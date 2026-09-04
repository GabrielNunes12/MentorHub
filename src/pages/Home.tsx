import { Link } from 'react-router-dom'
import { useCalendly } from '../hooks/useCalendly'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'

import SEO from '../components/SEO'

const GAMES_URL = 'https://gaming.mentor-hub.space'

const Home = () => {
  const { openCalendly } = useCalendly()
  const { t, translations } = useLanguage()

  const stats = translations.home.stats
  const features = translations.home.features.items

  return (
    <div className="w-full">
      <SEO
        title="MentorHub — Games Studio & IT Outsourcing"
        description="MentorHub publishes original games and delivers full-scope outsourced software projects, end to end."
        canonical={window.location.origin}
      />
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-obsidian min-h-[92vh] flex items-center">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(242,251,244,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(242,251,244,0.4)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-xl border border-obsidian-edge bg-obsidian-surface font-mono text-xs tracking-wider text-obsidian-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-games-bright opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-games-bright" />
              </span>
              GAMES STUDIO &middot; IT OUTSOURCING
            </div>

            <h1 className="font-display font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-games-bright">{t('home.hero.titleGames')}</span>
              <span className="text-obsidian-dim"> &amp;&amp; </span>
              <br className="hidden sm:block" />
              <span className="text-outsourcing-bright">{t('home.hero.titleOutsourcing')}</span>
              <span className="animate-blink text-outsourcing-bright">_</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-obsidian-dim leading-relaxed">
              {t('home.hero.description')}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={GAMES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold font-mono text-obsidian rounded-xl bg-games-bright hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                {t('home.hero.cta1')}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => openCalendly('Outsourcing Discovery Call')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold font-mono rounded-xl border border-outsourcing-bright text-outsourcing-bright hover:bg-outsourcing-bright hover:text-obsidian transition-all duration-300"
              >
                {t('home.hero.cta2')}
              </button>
            </div>

            {/* Status readout */}
            <div className="mt-16 w-full max-w-md rounded-xl border border-obsidian-edge bg-obsidian-surface px-6 py-5 font-mono text-xs">
              <div className="text-obsidian-dim mb-2">&gt; status --studio</div>
              {stats.map((stat) => (
                <div key={stat.label} className="flex justify-between py-0.5">
                  <span className="text-obsidian-dim">{stat.label}</span>
                  <span className="text-games-bright">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              {t('home.features.title')}
            </h2>
            <p className="text-lg text-muted max-w-2xl mt-3">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-surface border border-edge p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-edge">
                    <PathNode variant={index % 2 === 0 ? 'games' : 'outsourcing'} size="lg" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted line-clamp-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-obsidian overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-games-bright mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-obsidian-dim mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={GAMES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 text-base font-semibold font-mono bg-games-bright text-obsidian rounded-xl hover:opacity-90 transition-all duration-300"
            >
              {t('home.cta.button')}
            </a>
            <Link
              to="/services"
              className="flex items-center justify-center px-8 py-4 text-base font-semibold font-mono border border-outsourcing-bright text-outsourcing-bright rounded-xl hover:bg-outsourcing-bright hover:text-obsidian transition-all duration-300"
            >
              {t('home.cta.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
