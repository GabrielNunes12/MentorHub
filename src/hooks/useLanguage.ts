import { useEffect, useState } from 'react'
import { translations } from '../locales/translations'

export type Language = 'en' | 'pt' | 'es'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('appLanguage') as Language | null
    if (savedLanguage && ['en', 'pt', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
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

  return {
    language,
    changeLanguage,
    t,
    translations: translations[language],
  }
}
