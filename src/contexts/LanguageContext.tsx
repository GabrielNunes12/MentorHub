import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../locales/translations'

export type Language = 'en' | 'pt' | 'es'

interface LanguageContextType {
  language: Language
  changeLanguage: (newLanguage: Language) => void
  t: (key: string) => any
  translations: typeof translations[Language]
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('appLanguage') as Language | null
    if (savedLanguage && ['en', 'pt', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
      setIsInitialized(true)
      return
    }

    // Detect from browser language
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'pt') {
      setLanguage('pt')
    } else if (browserLang === 'es') {
      setLanguage('es')
    } else {
      setLanguage('en')
    }
    setIsInitialized(true)
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('appLanguage', newLanguage)
  }

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  // Don't render children until language is initialized
  if (!isInitialized) {
    return null
  }

  const value: LanguageContextType = {
    language,
    changeLanguage,
    t,
    translations: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
