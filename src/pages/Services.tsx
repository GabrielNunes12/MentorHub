import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'

import SEO from '../components/SEO'

const GAMING_STUDIOS_URL = 'https://mentorhubgaming.com'
const BLOG_URL = 'https://syndevs.mentor-hub.space'

const Services = () => {
  const { t, translations } = useLanguage()
  const { gaming, solutions, blog } = translations.services.platforms

  return (
    <div className="w-full">
      <SEO
        title="Our Game Development Services"
        description="MentorHub Gaming Studios and MentorHub Solutions - specialized game development mentorship and consulting."
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

      {/* Platforms Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Gaming Studios */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gaming to-professional rounded-xl">
                <PathNode variant="gaming" size="lg" className="text-slate-50" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                {gaming.name}
              </h3>
              <p className="text-sm font-medium text-gaming mb-4">
                {gaming.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1">
                {gaming.description}
              </p>
              <a
                href={GAMING_STUDIOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-gaming text-slate-50 hover:opacity-90 transition-all duration-300"
              >
                {gaming.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Solutions */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gaming to-professional rounded-xl">
                <PathNode variant="professional" size="lg" className="text-slate-50" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                {solutions.name}
              </h3>
              <p className="text-sm font-medium text-professional mb-4">
                {solutions.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1">
                {solutions.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-professional text-slate-50 hover:opacity-90 transition-all duration-300"
              >
                {solutions.cta}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Blog */}
            <div className="group bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gaming to-professional rounded-xl">
                <PathNode variant="connection" size="lg" className="text-slate-50" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                {blog.name}
              </h3>
              <p className="text-sm font-medium text-connection mb-4">
                {blog.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-1">
                {blog.description}
              </p>
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-connection text-slate-900 hover:opacity-90 transition-all duration-300"
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
