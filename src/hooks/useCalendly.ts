export const useCalendly = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/prismaticnetwork12'

  const openCalendly = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank', 'width=960,height=700')
    }
  }

  const isAvailable = !!calendlyUrl

  return { openCalendly, calendlyUrl, isAvailable }
}
