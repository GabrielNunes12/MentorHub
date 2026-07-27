import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { sendEmail } from '../services/email'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from '../components/PathNode'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

import SEO from '../components/SEO'

const Contact = () => {
  const { t, translations } = useLanguage()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage('')
    try {
      const result = await sendEmail(data)
      if (result.success) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message)
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('An unexpected error occurred. Please check the browser console.')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <SEO
        title="Contact MentorHubTech"
        description="Get in touch with MentorHubTech for inquiries about our game development mentorship and consulting services."
        canonical={`${window.location.origin}/contact`}
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
              <span>{t('contact.hero.title')}</span>
              <span className="bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">{t('contact.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center space-x-3 text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  <PathNode variant="connection" size="md" className="flex-shrink-0" />
                  <span>{t('contact.info.title')}</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t('contact.info.subtitle')}
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <PathNode variant="connection" size="lg" className="mr-2 text-slate-50" />
                    <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-1">
                      {t('contact.info.email')}
                    </h4>
                  </div>
                  <div>
                    <a
                      href="mailto:gabrieln.dev3@gmail.com"
                      className="block text-slate-600 dark:text-slate-400 hover:text-slate-400/70 break-all"
                    >
                      gabrieln.dev3@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <PathNode variant="connection" size="lg" className="mr-2 text-slate-50" />
                    <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-1">
                      {t('contact.info.location')}
                    </h4>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t('contact.info.locationValue')}
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <PathNode variant="connection" size="lg" className="mr-2 text-slate-50" />
                    <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-1">
                      {t('contact.info.responseTime')}
                    </h4>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t('contact.info.responseTimeValue')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700 pt-6">
                <h4 className="flex items-center space-x-3 font-bold text-slate-900 dark:text-slate-50 mb-4">
                  <PathNode variant="connection" size="md" className="flex-shrink-0" />
                  <span>{t('contact.info.social')}</span>
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gabriel-nunes1/"
                    className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="https://github.com/GabrielNunes12"
                    className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                    aria-label="GitHub"
                  >
                    ◉
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1">
                    <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.fullName')}</span>
                  </label>
                  <input
                    {...register('name', { required: t('contact.form.errors.nameRequired') })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus-ring-gaming focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.fullName')}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1">
                    <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.email')}</span>
                  </label>
                  <input
                    {...register('email', {
                      required: t('contact.form.errors.emailRequired'),
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t('contact.form.errors.emailInvalid'),
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus-ring-gaming focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.email')}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1">
                    <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.phone')}</span>
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus-ring-gaming focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.phone')}
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1">
                    <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.subject')}</span>
                  </label>
                  <input
                    {...register('subject', { required: t('contact.form.errors.subjectRequired') })}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus-ring-gaming focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.subject')}
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-slate-50 mb-1">
                    <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.message')}</span>
                  </label>
                  <textarea
                    {...register('message', { required: t('contact.form.errors.messageRequired') })}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus-ring-gaming focus:border-transparent outline-none transition resize-none"
                    placeholder={t('contact.form.placeholders.message')}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 rounded-xl">
                    <PathNode variant="connection" size="md" className="mr-2 text-slate-50" />
                    <span>{t('contact.form.success')}</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 rounded-xl">
                    <PathNode variant="connection" size="md" className="mr-2 text-red-500" />
                    <span>
                      <p className="font-semibold mb-1">✗ {t('contact.form.error')}</p>
                      <p className="text-sm">{errorMessage || 'Please try again later. Check browser console for details.'}</p>
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 text-lg font-semibold bg-gradient-to-r from-gaming to-professional text-slate-50 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PathNode variant="professional" size="md" className="mr-3" />
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-50/30 via-transparent to-transparent dark:from-slate-950/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center space-x-6 text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
            <PathNode variant="professional" size="lg" className="flex-shrink-0" />
            <span>{t('contact.faq.title')}</span>
          </h2>
          <div className="space-y-6">
            {translations.contact.faq.items.map((faq, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="flex items-center space-x-3 text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                  <PathNode variant="connection" size="md" className="flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {faq.answer}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
