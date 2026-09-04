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

  const inputClass = 'w-full px-4 py-2 border border-edge rounded-xl bg-bg text-ink focus:ring-2 focus:ring-games focus:border-transparent outline-none transition'

  return (
    <div className="w-full">
      <SEO
        title="Contact MentorHub"
        description="Get in touch with MentorHub about our games or to discuss an outsourced software project."
        canonical={`${window.location.origin}/contact`}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink tracking-tight">
              {t('contact.hero.title')}{' '}
              <span className="text-outsourcing">{t('contact.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mt-4">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-ink mb-4">
                  <PathNode variant="outsourcing" size="md" className="flex-shrink-0" />
                  <span>{t('contact.info.title')}</span>
                </h3>
                <p className="text-sm text-muted">
                  {t('contact.info.subtitle')}
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <PathNode variant="outsourcing" size="lg" className="mr-2" />
                    <h4 className="font-bold text-ink mb-1">
                      {t('contact.info.email')}
                    </h4>
                  </div>
                  <div>
                    <a
                      href="mailto:gabrieln.dev3@gmail.com"
                      className="block text-muted hover:text-games break-all"
                    >
                      gabrieln.dev3@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <PathNode variant="outsourcing" size="lg" className="mr-2" />
                    <h4 className="font-bold text-ink mb-1">
                      {t('contact.info.location')}
                    </h4>
                  </div>
                  <div>
                    <p className="text-muted">
                      {t('contact.info.locationValue')}
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <PathNode variant="outsourcing" size="lg" className="mr-2" />
                    <h4 className="font-bold text-ink mb-1">
                      {t('contact.info.responseTime')}
                    </h4>
                  </div>
                  <div>
                    <p className="text-muted">
                      {t('contact.info.responseTimeValue')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-edge">
                <h4 className="flex items-center gap-3 font-bold text-ink mb-4">
                  <PathNode variant="outsourcing" size="md" className="flex-shrink-0" />
                  <span>{t('contact.info.social')}</span>
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gabriel-nunes1/"
                    className="w-12 h-12 rounded-xl border border-edge bg-surface flex items-center justify-center text-ink hover:border-games transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="https://github.com/GabrielNunes12"
                    className="w-12 h-12 rounded-xl border border-edge bg-surface flex items-center justify-center text-ink hover:border-games transition-colors"
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
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-ink mb-1">
                    <PathNode variant="outsourcing" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.fullName')}</span>
                  </label>
                  <input
                    {...register('name', { required: t('contact.form.errors.nameRequired') })}
                    type="text"
                    id="name"
                    className={inputClass}
                    placeholder={t('contact.form.placeholders.fullName')}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-ink mb-1">
                    <PathNode variant="outsourcing" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.email')}</span>
                  </label>
                  <input
                    {...register('email', {
                      required: t('contact.form.errors.emailRequired'),
                      pattern: {
                        value: /^[^\s@]+@([^\s@.]+\.)+[^\s@.]+$/,
                        message: t('contact.form.errors.emailInvalid'),
                      },
                    })}
                    type="email"
                    id="email"
                    className={inputClass}
                    placeholder={t('contact.form.placeholders.email')}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-ink mb-1">
                    <PathNode variant="outsourcing" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.phone')}</span>
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={inputClass}
                    placeholder={t('contact.form.placeholders.phone')}
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="flex items-center gap-2 text-sm font-semibold text-ink mb-1">
                    <PathNode variant="outsourcing" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.subject')}</span>
                  </label>
                  <input
                    {...register('subject', { required: t('contact.form.errors.subjectRequired') })}
                    type="text"
                    id="subject"
                    className={inputClass}
                    placeholder={t('contact.form.placeholders.subject')}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-ink mb-1">
                    <PathNode variant="outsourcing" size="sm" className="flex-shrink-0" />
                    <span>{t('contact.form.labels.message')}</span>
                  </label>
                  <textarea
                    {...register('message', { required: t('contact.form.errors.messageRequired') })}
                    id="message"
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder={t('contact.form.placeholders.message')}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-surface border border-games text-ink rounded-xl flex items-center gap-2">
                    <PathNode variant="games" size="md" />
                    <span>{t('contact.form.success')}</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-surface border border-red-500 text-ink rounded-xl flex items-start gap-2">
                    <PathNode variant="outsourcing" size="md" />
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
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 text-base font-mono font-semibold bg-games text-ink rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-bg overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-4 text-3xl font-display font-bold text-ink mb-12">
            <PathNode variant="outsourcing" size="lg" className="flex-shrink-0" />
            <span>{t('contact.faq.title')}</span>
          </h2>
          <div className="space-y-4">
            {translations.contact.faq.items.map((faq) => (
              <div
                key={faq.question}
                className="group bg-surface border border-edge rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="flex items-center gap-3 text-lg font-bold text-ink mb-2">
                  <PathNode variant="outsourcing" size="md" className="flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-muted">
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
