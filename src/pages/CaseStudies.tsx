import { useLanguage } from '../hooks/useLanguage'
import SEO from '../components/SEO'

const BLOG_POST_URL = 'https://syndevs.mentor-hub.space/posts/chat-with-your-database-safe-sql'
const REPO_URL = 'https://github.com/GabrielNunes12/chat-with-your-db'

interface CaseStudyItem {
  title: string
  tag: string
  summary: string
  stack: string[]
  highlight: string
  cta: string
}

const CaseStudies = () => {
  const { translations } = useLanguage()
  const { hero, items } = translations.caseStudies as {
    hero: { title: string; description: string }
    items: CaseStudyItem[]
  }

  return (
    <div className="w-full">
      <SEO
        title="Case Studies"
        description="Real MentorHub builds — AI-accelerated backend engineering, shown not just claimed."
        canonical={`${window.location.origin}/case-studies`}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg text-muted max-w-2xl mt-4">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="relative py-16 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {items.map((item) => (
              <article
                key={item.title}
                className="group bg-surface border border-edge p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wide text-outsourcing mb-3">
                  {item.tag}
                </span>
                <h2 className="text-2xl font-bold text-ink mb-3">
                  {item.title}
                </h2>
                <p className="text-muted mb-4">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-bg border border-edge text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted border-l-2 border-outsourcing pl-4 mb-6">
                  {item.highlight}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={BLOG_POST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-semibold rounded-lg border border-outsourcing text-outsourcing hover:bg-outsourcing hover:text-ink transition-all duration-300"
                  >
                    {item.cta}
                  </a>
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono font-semibold rounded-lg border border-edge text-ink hover:border-games hover:text-games transition-all duration-300"
                  >
                    View repo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
