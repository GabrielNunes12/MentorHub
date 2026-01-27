import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { sendEmail } from '../services/email'
import { useLanguage } from '../hooks/useLanguage'

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
        description="Get in touch with Gabriel Nunes for mentorship tailored to your career goals. Schedule a consultation or send a message."
        canonical={`${window.location.origin}/contact`}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.hero.title')} <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t('contact.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('contact.info.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {t('contact.info.subtitle')}
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {t('contact.info.email')}
                    </h4>
                    <a
                      href="mailto:gabrieln.dev3@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      gabrieln.dev3@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {t('contact.info.location')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('contact.info.locationValue')}
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex gap-4">
                  <div className="text-3xl">⏱️</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {t('contact.info.responseTime')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('contact.info.responseTimeValue')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                  {t('contact.info.social')}
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/gabriel-nunes1/"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="https://github.com/GabrielNunes12"
                    className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
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
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.form.labels.fullName')}
                  </label>
                  <input
                    {...register('name', { required: t('contact.form.errors.nameRequired') })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.fullName')}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.form.labels.email')}
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
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.email')}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.form.labels.phone')}
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.phone')}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.form.labels.subject')}
                  </label>
                  <input
                    {...register('subject', { required: t('contact.form.errors.subjectRequired') })}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder={t('contact.form.placeholders.subject')}
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.form.labels.message')}
                  </label>
                  <textarea
                    {...register('message', { required: t('contact.form.errors.messageRequired') })}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                    placeholder={t('contact.form.placeholders.message')}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    ✓ {t('contact.form.success')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                    <p className="font-semibold mb-1">✗ {t('contact.form.error')}</p>
                    <p className="text-sm">{errorMessage || 'Please try again later. Check browser console for details.'}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.button')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t('contact.faq.title')}
          </h2>
          <div className="space-y-6">
            {translations.contact.faq.items.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
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
