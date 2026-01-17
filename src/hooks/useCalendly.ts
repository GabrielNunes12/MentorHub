export const useCalendly = () => {
  const defaultCalendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/prismaticnetwork12'

  const serviceUrls = {
    'Career Coaching': 'https://calendly.com/d/ctjv-525-36m/mentorship-career',
    'Resume & LinkedIn Review': 'https://calendly.com/d/cyd5-24n-428/mentorship-resume',
    'Interview Prep': 'https://calendly.com/d/cx7r-7df-vtz/mentorship-interview-prep',
    'Salary Negotiation': defaultCalendlyUrl,
    'Leadership Mentorship': defaultCalendlyUrl,
    'Monthly Retainer': defaultCalendlyUrl,
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
