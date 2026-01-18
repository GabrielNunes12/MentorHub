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
    { path: '/mentors', label: t('navbar.mentors') },
    { path: '/services', label: t('navbar.services') },
    { path: '/testimonials', label: t('navbar.testimonials') },
    { path: '/contact', label: t('navbar.contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              MentorHubTech
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors ${location.pathname === path
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                {label}
              </Link>
            ))}
            <LanguageSelector />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
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
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 px-4 rounded transition-colors ${location.pathname === path
                    ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-700 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
