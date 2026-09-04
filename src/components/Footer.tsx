import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

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
            <h3 className="font-display text-2xl font-bold mb-4 text-slate-50">
              {t('footer.brand')}
            </h3>
            <p className="text-slate-400 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold mb-4 text-slate-50">
              {t('footer.quickLinks.title')}
            </h4>
            <ul className="space-y-2 text-slate-400 font-mono text-sm">
              <li><Link to="/" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                ./{t('footer.quickLinks.home')}
              </Link></li>
              <li><Link to="/about" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                ./{t('footer.quickLinks.about')}
              </Link></li>
              <li><Link to="/services" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                ./{t('footer.quickLinks.services')}
              </Link></li>
              <li><Link to="/contact" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                ./{t('footer.quickLinks.contact')}
              </Link></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-mono font-semibold mb-4 text-slate-50">
              {t('footer.platforms.title')}
            </h4>
            <ul className="space-y-2 text-slate-400 font-mono text-sm">
              <li><a href="https://gaming.mentor-hub.space" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-games-bright hover:translate-x-1 inline-block">
                {t('footer.platforms.games')}
              </a></li>
              <li><Link to="/services" className="transition-all duration-300 hover:text-outsourcing-bright hover:translate-x-1 inline-block">
                {t('footer.platforms.outsourcing')}
              </Link></li>
              <li><a href="https://syndevs.mentor-hub.space" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                {t('footer.platforms.blog')}
              </a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-50">
              {t('footer.legal.title')}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/privacy-policy" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                {t('footer.legal.privacy')}
              </Link></li>
              <li><Link to="/terms-of-service" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                {t('footer.legal.terms')}
              </Link></li>
              <li><Link to="/refund-policy" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                {t('footer.legal.refundPolicy')}
              </Link></li>
              <li><a href="/sitemap.xml" className="transition-all duration-300 hover:text-slate-50 hover:translate-x-1 inline-block">
                {t('footer.legal.sitemap')}
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 font-mono text-xs text-slate-500">
          {t('footer.legal.copyright').replace('{year}', currentYear.toString())}
        </div>
      </div>
    </footer>
  )
}

export default Footer
