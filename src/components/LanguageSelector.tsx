import { useLanguage, type Language } from '../hooks/useLanguage'

export const LanguageSelector = () => {
  const { language, changeLanguage, t } = useLanguage()

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: t('common.english'), flag: '🇺🇸' },
    { code: 'pt', label: t('common.portuguese'), flag: '🇧🇷' },
    { code: 'es', label: t('common.spanish'), flag: '🇪🇸' },
  ]

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-white/5 border border-transparent dark:border-white/10">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`flex items-center justify-center w-7 h-7 rounded-full text-sm transition-all duration-300 ${
            language === lang.code
              ? 'bg-gradient-to-br from-gaming to-professional shadow-glow-purple scale-105'
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
