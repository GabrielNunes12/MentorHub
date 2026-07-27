import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useBooking } from './useBooking'

const setLocation = () => {
  const location = { href: '' }
  Object.defineProperty(window, 'location', {
    writable: true,
    configurable: true,
    value: location,
  })
  return location
}

describe('useBooking', () => {
  it('starts closed with no service selected', () => {
    const { result } = renderHook(() => useBooking())
    expect(result.current.isModalOpen).toBe(false)
    expect(result.current.selectedService).toBe('')
  })

  it('openBooking selects the service and opens the modal', () => {
    const { result } = renderHook(() => useBooking())

    act(() => result.current.openBooking('Career Coaching', 3))

    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.selectedService).toBe('Career Coaching')
  })

  it('closeBooking resets the modal state', () => {
    const { result } = renderHook(() => useBooking())
    act(() => result.current.openBooking('Career Coaching', 3))

    act(() => result.current.closeBooking())

    expect(result.current.isModalOpen).toBe(false)
    expect(result.current.selectedService).toBe('')
  })

  it('confirmBooking redirects to the checkout URL on success', async () => {
    const location = setLocation()
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ url: 'https://checkout.example.com/session/abc' }),
      })
    )
    const { result } = renderHook(() => useBooking())
    act(() => result.current.openBooking('Career Coaching', 3))

    await act(async () => {
      await result.current.confirmBooking(new Date('2025-06-10'), '10:00', 150, 'USD')
    })

    expect(fetch).toHaveBeenCalledWith(
      '/api/create-checkout-session',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('"serviceName":"Career Coaching"'),
      })
    )
    expect(location.href).toBe('https://checkout.example.com/session/abc')
  })

  it('alerts the user when the checkout session cannot be created', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ error: 'boom' }),
      })
    )
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const { result } = renderHook(() => useBooking())
    act(() => result.current.openBooking('Career Coaching', 3))

    await act(async () => {
      await result.current.confirmBooking(new Date('2025-06-10'), '10:00', 150, 'USD')
    })

    expect(alertSpy).toHaveBeenCalledWith('Failed to initiate payment. Please try again.')
  })

  it('alerts the user when the request itself throws', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')))
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const { result } = renderHook(() => useBooking())
    act(() => result.current.openBooking('Career Coaching', 3))

    await act(async () => {
      await result.current.confirmBooking(new Date('2025-06-10'), '10:00', 150, 'USD')
    })

    expect(alertSpy).toHaveBeenCalledWith('An unexpected error occurred.')
  })
})
