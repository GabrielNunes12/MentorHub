import { Link } from 'react-router-dom'
import { useCalendly } from '../hooks/useCalendly'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'

import SEO from '../components/SEO'

const HERO_BADGES = [
  { initials: 'PF', from: 'from-gaming', to: 'to-fuchsia-400' },
  { initials: 'NX', from: 'from-professional', to: 'to-emerald-400' },
  { initials: 'RB', from: 'from-gaming', to: 'to-professional' },
  { initials: 'ST', from: 'from-professional', to: 'to-gaming' },
]

const Home = () => {
  const { openCalendly } = useCalendly()
  const { t, translations } = useLanguage()

  const stats = translations.home.stats
  const features = translations.home.features.items

  return (
    <div className="w-full">
      <SEO
        title="Level Up Your Game Development"
        description="Expert guidance and mentorship for game developers and studios. From concept to launch, we help you create exceptional gaming experiences."
        canonical={window.location.origin}
      />
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#05060f] min-h-[92vh] flex items-center">
        {/* Mesh gradient + grid backdrop */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-gaming/30 blur-[120px] animate-blob" />
          <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-professional/25 blur-[130px] animate-blob [animation-delay:-4s]" />
          <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-gaming/20 blur-[120px] animate-blob [animation-delay:-7s]" />
          <div
            className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-mono text-xs tracking-wider text-slate-300 shadow-glow-purple">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-professional opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-professional" />
              </span>
              GAME DEV MENTORSHIP &middot; STUDIOS &amp; INDIES
            </div>

            <h1 className="font-display font-bold tracking-tight text-white leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {t('home.hero.title')}{' '}
              <span className="relative inline-block bg-gradient-to-r from-gaming via-fuchsia-400 to-professional bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                {t('home.hero.titleHighlight')}
              </span>{' '}
              {t('home.hero.subtitle')}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              {t('home.hero.description')}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openCalendly()}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-gaming to-professional shadow-glow-purple hover:shadow-glow-emerald-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                {t('home.hero.cta1')}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border border-professional/40 text-white bg-white/[0.03] backdrop-blur-md hover:bg-professional/10 hover:border-professional hover:shadow-glow-emerald transition-all duration-300"
              >
                {t('home.hero.cta2')}
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-16 flex flex-col items-center gap-3">
              <div className="flex -space-x-3">
                {HERO_BADGES.map((badge) => (
                  <div
                    key={badge.initials}
                    className={`relative w-11 h-11 rounded-full ring-2 ring-[#05060f] bg-gradient-to-br ${badge.from} ${badge.to} flex items-center justify-center font-mono text-xs font-semibold text-white shadow-glow-purple`}
                  >
                    {badge.initials}
                  </div>
                ))}
                <div className="w-11 h-11 rounded-full ring-2 ring-[#05060f] bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center font-mono text-[11px] font-semibold text-slate-200">
                  +20
                </div>
              </div>
              <p className="font-mono text-sm text-slate-400">
                <span className="text-white font-semibold">20+</span> {t('home.hero.trustIndicator')}
              </p>
            </div>
          </div>
        </div>

        {/* Fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
              {t('home.features.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-400 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              type="button"
              onClick={() => openCalendly()}
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold bg-slate-50 text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {t('home.cta.button')}
            </button>
            <Link
              to="/services"
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-slate-50 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
