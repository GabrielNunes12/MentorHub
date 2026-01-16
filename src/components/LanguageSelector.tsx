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
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {t('common.language')}:
      </span>
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-3 py-1 rounded text-sm font-semibold transition-all flex items-center gap-1 ${
              language === lang.code
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            title={lang.label}
          >
            <span>{lang.flag}</span>
            <span>{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
