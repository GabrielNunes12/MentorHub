import { useLanguage, type Language } from '../hooks/useLanguage'

export const LanguageSelector = () => {
  const { language, changeLanguage, t } = useLanguage()

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: t('common.english'), flag: '🇺🇸' },
    { code: 'pt', label: t('common.portuguese'), flag: '🇧🇷' },
    { code: 'es', label: t('common.spanish'), flag: '🇪🇸' },
  ]

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-surface border border-edge">
      {languages.map((lang) => (
        <button
          type="button"
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`flex items-center justify-center w-9 h-9 md:w-7 md:h-7 rounded-lg text-sm transition-all duration-300 ${
            language === lang.code
              ? 'border border-games scale-105'
              : 'opacity-60 hover:opacity-100'
          }`}
          title={lang.label}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  )
}
