import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { useBooking } from '../../hooks/useBooking'
import { BookingModal } from '../../components/BookingModal'
import { renderWithProviders, screen } from '../test-utils'

vi.mock('react-day-picker', () => ({
  DayPicker: ({ onSelect }: { onSelect: (date: Date) => void }) => (
    <button onClick={() => onSelect(new Date('2025-06-16'))}>pick-2025-06-16</button>
  ),
}))

const Harness = () => {
  const { isModalOpen, selectedService, openBooking, closeBooking, confirmBooking } = useBooking()

  return (
    <div>
      <button onClick={() => openBooking('Career Coaching', 3)}>Open booking</button>
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBooking}
        onConfirm={confirmBooking}
        serviceName={selectedService}
        price={150}
        currencySymbol="$"
        currencyCode="USD"
      />
    </div>
  )
}

const setLocation = () => {
  const location = { href: '' }
  Object.defineProperty(window, 'location', { writable: true, configurable: true, value: location })
  return location
}

describe('booking flow', () => {
  it('walks a user from opening the modal through to checkout redirect', async () => {
    const location = setLocation()
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ url: 'https://checkout.example.com/session/xyz' }),
      })
    )
    const user = userEvent.setup()
    renderWithProviders(<Harness />)

    expect(screen.queryByText('Select Date')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open booking' }))
    expect(screen.getByText('Select Date')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'pick-2025-06-16' }))
    expect(screen.getByText('Select Time')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '10:00' }))
    expect(screen.getByText('Confirm Booking')).toBeInTheDocument()
    expect(screen.getByText('Career Coaching')).toBeInTheDocument()
    expect(screen.getByText('$150')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Confirm & Pay' }))

    expect(fetch).toHaveBeenCalledWith(
      '/api/create-checkout-session',
      expect.objectContaining({
        body: expect.stringContaining('"serviceName":"Career Coaching"'),
      })
    )
    await vi.waitFor(() => expect(location.href).toBe('https://checkout.example.com/session/xyz'))
  })

  it('lets the user close the modal at any step', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Harness />)

    await user.click(screen.getByRole('button', { name: 'Open booking' }))
    expect(screen.getByText('Select Date')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '✕' }))

    expect(screen.queryByText('Select Date')).not.toBeInTheDocument()
  })

  it('can go back from the time step to reselect', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Harness />)

    await user.click(screen.getByRole('button', { name: 'Open booking' }))
    await user.click(screen.getByRole('button', { name: 'pick-2025-06-16' }))
    await user.click(screen.getByRole('button', { name: '10:00' }))
    expect(screen.getByText('Confirm Booking')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Back' }))

    expect(screen.getByText('Select Time')).toBeInTheDocument()
  })
})
