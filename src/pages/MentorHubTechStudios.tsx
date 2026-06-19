import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import SEO from '../components/SEO'

const MentorHubTechStudios = () => {
  const { t } = useLanguage()

  return (
    <div className="max-w-5xl mx-auto py-24 px-4">
      <SEO title={t('mentorhubtech.studios.title')} description={t('mentorhubtech.studios.description')} />

      <h1 className="text-4xl font-bold mb-4">{t('mentorhubtech.studios.title')}</h1>
      <p className="text-lg text-gray-600 mb-6">{t('mentorhubtech.studios.subtitle')}</p>

      <p className="text-gray-700 mb-6">{t('mentorhubtech.studios.description')}</p>

      <Link to="/" className="text-primary font-semibold">{t('mentorhubtech.studios.back')}</Link>
    </div>
  )
}

export default MentorHubTechStudios
