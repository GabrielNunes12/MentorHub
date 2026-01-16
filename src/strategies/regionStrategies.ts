import type { RegionStrategy } from '../types/pricing'

export const regionStrategies: Record<string, RegionStrategy> = {
  BR: {
    code: 'BR',
    name: 'Brazil',
    currency: { symbol: 'R$', code: 'BRL', name: 'Brazilian Real' },
    countryCodes: ['BR'],
    convertPrice: (usdPrice: number) => Math.round(usdPrice * 4.5),
  },
  EU: {
    code: 'EU',
    name: 'Eurozone',
    currency: { symbol: '€', code: 'EUR', name: 'Euro' },
    countryCodes: ['DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'AT', 'GR', 'PT', 'IE', 'FI', 'SE', 'DK', 'PL', 'CZ', 'SK', 'SI', 'LU', 'MT', 'CY'],
    convertPrice: (usdPrice: number) => Math.round(usdPrice * 0.92 * 100) / 100,
  },
  UK: {
    code: 'UK',
    name: 'United Kingdom',
    currency: { symbol: '£', code: 'GBP', name: 'British Pound' },
    countryCodes: ['GB'],
    convertPrice: (usdPrice: number) => Math.round(usdPrice * 0.79 * 100) / 100,
  },
  US: {
    code: 'US',
    name: 'United States',
    currency: { symbol: '$', code: 'USD', name: 'US Dollar' },
    countryCodes: ['US', 'CA'],
    convertPrice: (usdPrice: number) => usdPrice,
  },
}
