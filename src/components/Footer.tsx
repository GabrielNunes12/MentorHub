import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import PathNode from './PathNode'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 dark:bg-slate-950 text-slate-300 mt-20 relative overflow-hidden">
      {/* Decorative path elements */}
      <div className="absolute inset-0 pointer-none">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-slate-950/30 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="flex items-center space-x-4 text-2xl font-bold mb-4 bg-gradient-to-r from-gaming to-professional bg-clip-text text-transparent">
              <PathNode variant="professional" size="md" className="flex-shrink-0" />
              <span>{t('footer.brand')}</span>
            </h3>
            <p className="text-slate-400 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="flex items-center space-x-3 font-semibold mb-4 text-slate-50">
              <PathNode variant="connection" size="md" className="flex-shrink-0" />
              <span>{t('footer.quickLinks.title')}</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.quickLinks.home')}</span>
              </Link></li>
              <li><Link to="/about" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.quickLinks.about')}</span>
              </Link></li>
              <li><Link to="/services" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.quickLinks.services')}</span>
              </Link></li>
              <li><a href="https://mentorhubgaming.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="gaming" size="sm" className="flex-shrink-0" />
                <span>{t('footer.quickLinks.gaming')}</span>
              </a></li>
              <li><Link to="/contact" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.quickLinks.contact')}</span>
              </Link></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="flex items-center space-x-3 font-semibold mb-4 text-slate-50">
              <PathNode variant="connection" size="md" className="flex-shrink-0" />
              <span>{t('footer.platforms.title')}</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://mentorhubgaming.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="gaming" size="sm" className="flex-shrink-0" />
                <span>{t('footer.platforms.gaming')}</span>
              </a></li>
              <li><Link to="/services" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="professional" size="sm" className="flex-shrink-0" />
                <span>{t('footer.platforms.solutions')}</span>
              </Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="flex items-center space-x-3 font-semibold mb-4 text-slate-50">
              <PathNode variant="connection" size="md" className="flex-shrink-0" />
              <span>{t('footer.legal.title')}</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/privacy-policy" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.legal.privacy')}</span>
              </Link></li>
              <li><Link to="/terms-of-service" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.legal.terms')}</span>
              </Link></li>
              <li><Link to="/refund-policy" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.legal.refundPolicy')}</span>
              </Link></li>
              <li><a href="#" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="sm" className="flex-shrink-0" />
                <span>{t('footer.legal.sitemap')}</span>
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p className="flex items-center space-x-2 text-sm">
              <PathNode variant="connection" size="xs" className="flex-shrink-0" />
              <span>{t('footer.legal.copyright').replace('{year}', currentYear.toString())}</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link to="/privacy-policy" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="xs" className="flex-shrink-0" />
                <span>{t('footer.legal.privacy')}</span>
              </Link>
              <Link to="/terms-of-service" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="xs" className="flex-shrink-0" />
                <span>{t('footer.legal.terms')}</span>
              </Link>
              <Link to="/refund-policy" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="xs" className="flex-shrink-0" />
                <span>{t('footer.legal.refundPolicy')}</span>
              </Link>
              <a href="#" className="flex items-center space-x-2 transition-all duration-300 hover:text-slate-50 hover:-translate-x-1">
                <PathNode variant="connection" size="xs" className="flex-shrink-0" />
                <span>{t('footer.legal.sitemap')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
