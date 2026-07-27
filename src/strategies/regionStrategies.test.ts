import { describe, expect, it } from 'vitest'
import { regionStrategies } from './regionStrategies'

describe('regionStrategies', () => {
  it('leaves USD prices unchanged', () => {
    expect(regionStrategies.US.convertPrice(100)).toBe(100)
  })

  it('converts USD to BRL', () => {
    expect(regionStrategies.BR.convertPrice(100)).toBe(450)
  })

  it('converts USD to EUR', () => {
    expect(regionStrategies.EU.convertPrice(100)).toBe(92)
  })

  it('converts USD to GBP', () => {
    expect(regionStrategies.UK.convertPrice(100)).toBe(79)
  })

  it('rounds EUR conversions to two decimals', () => {
    expect(regionStrategies.EU.convertPrice(19.99)).toBeCloseTo(18.39, 2)
  })

  it('exposes the expected currency metadata', () => {
    expect(regionStrategies.US.currency).toEqual({ symbol: '$', code: 'USD', name: 'US Dollar' })
    expect(regionStrategies.BR.currency.code).toBe('BRL')
    expect(regionStrategies.EU.currency.code).toBe('EUR')
    expect(regionStrategies.UK.currency.code).toBe('GBP')
  })

  it('groups the US strategy with Canada', () => {
    expect(regionStrategies.US.countryCodes).toContain('CA')
  })

  it('groups major Eurozone countries under EU', () => {
    expect(regionStrategies.EU.countryCodes).toEqual(
      expect.arrayContaining(['DE', 'FR', 'ES', 'IT', 'PT'])
    )
  })
})
