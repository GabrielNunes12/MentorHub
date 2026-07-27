import { describe, expect, it } from 'vitest'
import { getRegionStrategyByCountryCode, getRegionStrategies } from './regionDetection'
import { regionStrategies } from '../strategies/regionStrategies'

describe('getRegionStrategyByCountryCode', () => {
  it('resolves Brazil to the BR strategy', () => {
    expect(getRegionStrategyByCountryCode('BR')).toBe(regionStrategies.BR)
  })

  it('resolves Germany to the EU strategy', () => {
    expect(getRegionStrategyByCountryCode('DE')).toBe(regionStrategies.EU)
  })

  it('resolves the United Kingdom to the UK strategy', () => {
    expect(getRegionStrategyByCountryCode('GB')).toBe(regionStrategies.UK)
  })

  it('resolves Canada to the US strategy', () => {
    expect(getRegionStrategyByCountryCode('CA')).toBe(regionStrategies.US)
  })

  it('falls back to US for an unrecognized country code', () => {
    expect(getRegionStrategyByCountryCode('ZZ')).toBe(regionStrategies.US)
  })

  it('falls back to US for an empty country code', () => {
    expect(getRegionStrategyByCountryCode('')).toBe(regionStrategies.US)
  })
})

describe('getRegionStrategies', () => {
  it('returns the full strategy map', () => {
    expect(getRegionStrategies()).toBe(regionStrategies)
  })
})
