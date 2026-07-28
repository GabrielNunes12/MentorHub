import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test-utils'
import AppRoutes from '../../AppRoutes'

describe('site navigation', () => {
  it('starts on the Home hero', () => {
    renderWithProviders(<AppRoutes />, { route: '/' })

    expect(screen.getByText('GAME DEV MENTORSHIP · STUDIOS & INDIES')).toBeInTheDocument()
  })

  it('navigates to About via the navbar', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    // The Footer also renders an "About" link, so grab the navbar's (first in DOM order).
    const [navAbout] = screen.getAllByRole('link', { name: 'About' })
    await user.click(navAbout)

    expect(await screen.findByRole('heading', { name: /About Us/ })).toBeInTheDocument()
  })

  it('navigates to Contact via the navbar', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    const [navContact] = screen.getAllByRole('link', { name: 'Contact' })
    await user.click(navContact)

    expect(await screen.findByLabelText(/name/i)).toBeInTheDocument()
  })

  it('navigates to Services and shows both platforms', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    const [navServices] = screen.getAllByRole('link', { name: 'Services' })
    await user.click(navServices)

    expect(await screen.findByText('MentorHub Gaming Studios')).toBeInTheDocument()
    expect(screen.getByText('MentorHub Solutions')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Visit Gaming Studios/ })).toHaveAttribute(
      'href',
      'https://mentorhubgaming.com'
    )
    expect(screen.getByRole('link', { name: /Get in Touch/ })).toHaveAttribute('href', '/contact')
  })

  it('returns to Home via the logo', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/about' })

    await user.click(screen.getByRole('link', { name: 'MentorHub' }))

    expect(await screen.findByText('GAME DEV MENTORSHIP · STUDIOS & INDIES')).toBeInTheDocument()
  })
})
