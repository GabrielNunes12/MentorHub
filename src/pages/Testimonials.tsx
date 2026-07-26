import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'
import SEO from '../components/SEO'

const Testimonials = () => {
  const { t, translations } = useLanguage()
  const testimonials = translations.testimonials.items

  return (
    <div className="w-full">
      <SEO
        title="Student Success Stories"
        description="Read how MentorHub has helped developers transform their careers, land new jobs, and negotiate better salaries."
        canonical={`${window.location.origin}/testimonials`}
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
              <PathNode variant="professional" size="lg" />
              <span>{t('testimonials.hero.title')}</span>
              <span className="bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">{t('testimonials.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('testimonials.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-2"
              >
                {/* Rating */}
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-base text-slate-600 dark:text-slate-400 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-slate-900 dark:text-slate-50">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.title}{testimonial.company && ' at ' + testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-gaming to-professional dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/5 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/5 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="flex items-center justify-center space-x-6 text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            <PathNode variant="connection" size="lg" />
            <span>{t('testimonials.cta.title')}</span>
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-400 mb-8">
            {t('testimonials.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="flex items-center justify-center px-8 py-4 text-lg font-semibold bg-slate-50 text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <PathNode variant="professional" size="md" className="mr-3" />
            {t('testimonials.cta.button')}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
