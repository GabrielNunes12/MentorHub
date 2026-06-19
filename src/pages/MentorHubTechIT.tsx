import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import SEO from '../components/SEO'

const MentorHubTechIT = () => {
  const { t } = useLanguage()

  return (
    <div className="max-w-5xl mx-auto py-24 px-4">
      <SEO title={t('mentorhubtech.it.title')} description={t('mentorhubtech.it.description')} />

      <h1 className="text-4xl font-bold mb-4">{t('mentorhubtech.it.title')}</h1>
      <p className="text-lg text-gray-600 mb-6">{t('mentorhubtech.it.subtitle')}</p>

      <p className="text-gray-700 mb-6">{t('mentorhubtech.it.description')}</p>

      <Link to="/" className="text-primary font-semibold">{t('mentorhubtech.it.back')}</Link>
    </div>
  )
}

export default MentorHubTechIT
