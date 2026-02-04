import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('footer.brand')}
            </h3>
            <p className="text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">{t('footer.quickLinks.home')}</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">{t('footer.quickLinks.about')}</Link></li>

              <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('footer.quickLinks.services')}</Link></li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('footer.services.careerCoaching')}</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('footer.services.techMentoring')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.connect.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:gabrieln.dev3@gmail.com" className="hover:text-blue-400 transition-colors">{t('footer.connect.email')}</a></li>
              <li><a href="https://www.linkedin.com/in/gabriel-nunes1/" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t('footer.connect.contactForm')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.legal.copyright').replace('{year}', currentYear.toString())}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                {t('footer.legal.privacy')}
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                {t('footer.legal.terms')}
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                {t('footer.legal.refundPolicy')}
              </Link>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                {t('footer.legal.sitemap')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
