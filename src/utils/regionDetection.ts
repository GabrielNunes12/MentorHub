import type { RegionStrategy } from '../types'
import { regionStrategies } from '../strategies/regionStrategies'

export const getRegionStrategyByCountryCode = (countryCode: string): RegionStrategy => {
  for (const strategy of Object.values(regionStrategies)) {
    if (strategy.countryCodes.includes(countryCode)) {
      return strategy
    }
  }
  return regionStrategies.US
}

export const getRegionStrategies = () => regionStrategies
