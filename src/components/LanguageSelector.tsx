import { useLanguage, type Language } from '../hooks/useLanguage'

export const LanguageSelector = () => {
  const { language, changeLanguage, t } = useLanguage()

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: t('common.english'), flag: '🇺🇸' },
    { code: 'pt', label: t('common.portuguese'), flag: '🇧🇷' },
    { code: 'es', label: t('common.spanish'), flag: '🇪🇸' },
  ]

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-2 py-1 rounded text-lg transition-all ${
              language === lang.code
                ? 'bg-blue-600 shadow-lg'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title={lang.label}
          >
            {lang.flag}
          </button>
        ))}
      </div>
    </div>
  )
}
