import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useCalendly } from './useCalendly'

describe('useCalendly', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('reports availability based on the default URL', () => {
    const { result } = renderHook(() => useCalendly())
    expect(result.current.isAvailable).toBe(true)
    expect(result.current.calendlyUrl).toBe('https://calendly.com/prismaticnetwork12')
  })

  it('opens the default URL when no service is specified', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const { result } = renderHook(() => useCalendly())

    result.current.openCalendly()

    expect(openSpy).toHaveBeenCalledWith(
      'https://calendly.com/prismaticnetwork12',
      '_blank',
      'width=960,height=700'
    )
  })

  it('opens the default URL for a known service name', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const { result } = renderHook(() => useCalendly())

    result.current.openCalendly('Outsourcing Discovery Call')

    expect(openSpy).toHaveBeenCalledWith(
      'https://calendly.com/prismaticnetwork12',
      '_blank',
      'width=960,height=700'
    )
  })

  it('falls back to the default URL for an unknown service name', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const { result } = renderHook(() => useCalendly())

    result.current.openCalendly('Some Unlisted Service')

    expect(openSpy).toHaveBeenCalledWith(
      'https://calendly.com/prismaticnetwork12',
      '_blank',
      'width=960,height=700'
    )
  })

  it('honors a custom VITE_CALENDLY_URL for services without a dedicated link', () => {
    vi.stubEnv('VITE_CALENDLY_URL', 'https://calendly.com/custom-link')
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const { result } = renderHook(() => useCalendly())

    result.current.openCalendly('Games & Partnership Inquiry')

    expect(openSpy).toHaveBeenCalledWith(
      'https://calendly.com/custom-link',
      '_blank',
      'width=960,height=700'
    )
  })
})
