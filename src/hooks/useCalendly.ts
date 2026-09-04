export const useCalendly = () => {
  const defaultCalendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/prismaticnetwork12'

  const serviceUrls = {
    'Outsourcing Discovery Call': defaultCalendlyUrl,
    'Games & Partnership Inquiry': defaultCalendlyUrl,
  }

  const openCalendly = (serviceName?: string) => {
    const url = serviceName && serviceName in serviceUrls 
      ? serviceUrls[serviceName as keyof typeof serviceUrls]
      : defaultCalendlyUrl
    
    if (url) {
      window.open(url, '_blank', 'width=960,height=700')
    }
  }

  const isAvailable = !!defaultCalendlyUrl

  return { openCalendly, calendlyUrl: defaultCalendlyUrl, isAvailable }
}
