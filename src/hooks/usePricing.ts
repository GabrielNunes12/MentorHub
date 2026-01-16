import { useEffect, useState } from 'react'
import type { RegionCode, RegionStrategy } from '../types'
import { regionStrategies } from '../strategies/regionStrategies'
import { getRegionStrategyByCountryCode } from '../utils/regionDetection'

export const useUserRegion = () => {
  const [region, setRegion] = useState<RegionCode>('US')
  const [strategy, setStrategy] = useState<RegionStrategy>(regionStrategies.US)

  useEffect(() => {
    // Check localStorage first for user preference
    const savedRegion = localStorage.getItem('userRegion') as RegionCode | null
    if (savedRegion && regionStrategies[savedRegion]) {
      setRegion(savedRegion)
      setStrategy(regionStrategies[savedRegion])
      return
    }

    // Detect region using IP geolocation
    const detectRegion = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        const countryCode = data.country_code || ''

        const detectedStrategy = getRegionStrategyByCountryCode(countryCode)
        setRegion(detectedStrategy.code)
        setStrategy(detectedStrategy)
        localStorage.setItem('userRegion', detectedStrategy.code)
      } catch (error) {
        console.warn('Could not detect region from IP, using default (US)')
        setRegion('US')
        setStrategy(regionStrategies.US)
      }
    }

    detectRegion()
  }, [])

  const currency = strategy.currency

  const convertPrice = (usdPrice: number) => strategy.convertPrice(usdPrice)

  const setUserRegion = (newRegion: RegionCode) => {
    if (regionStrategies[newRegion]) {
      setRegion(newRegion)
      setStrategy(regionStrategies[newRegion])
      localStorage.setItem('userRegion', newRegion)
    }
  }

  return {
    region,
    currency,
    convertPrice,
    setUserRegion,
  }
}
