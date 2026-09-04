import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'

import SEO from '../components/SEO'

const GAMES_URL = 'https://gaming.mentor-hub.space'
const BLOG_URL = 'https://syndevs.mentor-hub.space'

const Services = () => {
  const { t, translations } = useLanguage()
  const { games, outsourcing, blog } = translations.services.platforms

  return (
    <div className="w-full">
      <SEO
        title="Our Games & Outsourcing Services"
        description="MentorHub — original games we publish ourselves, and full-scope outsourced software delivery."
        canonical={`${window.location.origin}/services`}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="flex items-center gap-4 text-4xl md:text-5xl font-display font-bold text-ink tracking-tight">
              <PathNode variant="outsourcing" size="lg" className="flex-shrink-0" />
              <span>{translations.services.hero.title}</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mt-4">
              {t('services.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="relative py-16 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Games */}
            <div className="group bg-surface border border-edge p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl border border-games">
                <PathNode variant="games" size="lg" />
              </div>
              <div className="font-mono text-xs text-games mb-2">01 // GAMES</div>
              <h3 className="text-xl font-bold text-ink mb-2">
                {games.name}
              </h3>
              <p className="text-sm font-medium text-muted mb-4">
                {games.subtitle}
              </p>
              <p className="text-muted mb-8 flex-1">
                {games.description}
              </p>
              <a
                href={GAMES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-semibold rounded-lg bg-games text-ink hover:opacity-90 transition-all duration-300"
              >
                {games.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Outsourcing */}
            <div className="group bg-surface border border-edge p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl border border-outsourcing">
                <PathNode variant="outsourcing" size="lg" />
              </div>
              <div className="font-mono text-xs text-outsourcing mb-2">02 // OUTSOURCING</div>
              <h3 className="text-xl font-bold text-ink mb-2">
                {outsourcing.name}
              </h3>
              <p className="text-sm font-medium text-muted mb-4">
                {outsourcing.subtitle}
              </p>
              <p className="text-muted mb-8 flex-1">
                {outsourcing.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-semibold rounded-lg border border-outsourcing text-outsourcing hover:bg-outsourcing hover:text-ink transition-all duration-300"
              >
                {outsourcing.cta}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Blog */}
            <div className="group bg-surface border border-edge p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl border border-edge">
                <PathNode variant="neutral" size="lg" />
              </div>
              <div className="font-mono text-xs text-dim mb-2">03 // BLOG</div>
              <h3 className="text-xl font-bold text-ink mb-2">
                {blog.name}
              </h3>
              <p className="text-sm font-medium text-muted mb-4">
                {blog.subtitle}
              </p>
              <p className="text-muted mb-8 flex-1">
                {blog.description}
              </p>
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-semibold rounded-lg border border-edge text-ink hover:border-games hover:text-games transition-all duration-300"
              >
                {blog.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
