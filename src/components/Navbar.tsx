import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { LanguageSelector } from './LanguageSelector'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: t('navbar.home') },
    { path: '/about', label: t('navbar.about') },
    { path: '/services', label: t('navbar.services') },
    { path: '/contact', label: t('navbar.contact') },
  ]

  const ThemeIcon = () => (
    isDark ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.364-6.364-1.06 1.06M6.696 17.304l-1.06 1.06m12.728 0-1.06-1.06M6.696 6.696l-1.06-1.06M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    )
  )

  return (
    <nav className="sticky top-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-edge transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="font-display font-bold text-xl tracking-tight text-ink">
              ~/mentorhub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative text-sm font-medium font-mono transition-all duration-300 ${location.pathname === path
                  ? 'text-games'
                  : 'text-muted hover:text-ink'}`}
              >
                ./{label.toLowerCase()}
              </Link>
            ))}
            <LanguageSelector />
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-surface border border-edge text-muted hover:text-games transition-all duration-300"
              aria-label="Toggle theme"
            >
              <ThemeIcon />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-3.5 rounded-xl bg-surface border border-edge text-muted"
              aria-label="Toggle theme"
            >
              <ThemeIcon />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-muted"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-edge">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-3 font-mono text-sm text-muted hover:bg-surface transition-colors border-b border-edge last:border-b-0 ${location.pathname === path
                  ? 'font-semibold text-games'
                  : ''}`}
              >
                ./{label.toLowerCase()}
              </Link>
            ))}
            <div className="flex justify-center pt-4">
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
