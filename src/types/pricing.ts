export interface RegionStrategy {
  code: 'BR' | 'EU' | 'UK' | 'US'
  name: string
  currency: { symbol: string; code: string; name: string }
  countryCodes: string[]
  convertPrice: (usdPrice: number) => number
}

export type RegionCode = 'BR' | 'EU' | 'UK' | 'US'
