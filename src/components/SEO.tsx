import { Helmet } from 'react-helmet-async'

interface SEOProps {
    title: string
    description: string
    canonical?: string
    ogImage?: string
    noindex?: boolean
}

const SEO = ({ title, description, canonical, ogImage, noindex = false }: SEOProps) => {
    const siteUrl = window.location.origin
    const currentUrl = canonical || window.location.href

    return (
        <Helmet>
            {/* Basic Metrics */}
            <title>{title} | MentorHubTech</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />
            {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}
        </Helmet>
    )
}

export default SEO
