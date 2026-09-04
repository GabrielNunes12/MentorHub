import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test-utils'
import AppRoutes from '../../AppRoutes'

const HOME_HERO_EYEBROW = 'GAMES STUDIO · IT OUTSOURCING'

describe('site navigation', () => {
  it('starts on the Home hero', () => {
    renderWithProviders(<AppRoutes />, { route: '/' })

    expect(screen.getByText(HOME_HERO_EYEBROW)).toBeInTheDocument()
  })

  it('navigates to About via the navbar', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    // The Footer also renders an "./about" link, so grab the navbar's (first in DOM order).
    const [navAbout] = screen.getAllByRole('link', { name: './about' })
    await user.click(navAbout)

    expect(await screen.findByRole('heading', { name: /About MentorHub/ })).toBeInTheDocument()
  })

  it('navigates to Contact via the navbar', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    const [navContact] = screen.getAllByRole('link', { name: './contact' })
    await user.click(navContact)

    expect(await screen.findByLabelText(/name/i)).toBeInTheDocument()
  })

  it('navigates to Services and shows all platforms', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    const [navServices] = screen.getAllByRole('link', { name: './services' })
    await user.click(navServices)

    expect(await screen.findByText('MentorHub Games')).toBeInTheDocument()
    expect(screen.getByText('MentorHub Outsourcing')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Our Games/ })).toHaveAttribute(
      'href',
      'https://gaming.mentor-hub.space'
    )
    expect(screen.getByRole('link', { name: /Discuss a Project/ })).toHaveAttribute('href', '/contact')
  })

  it('returns to Home via the logo', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/about' })

    await user.click(screen.getByRole('link', { name: '~/mentorhub' }))

    expect(await screen.findByText(HOME_HERO_EYEBROW)).toBeInTheDocument()
  })
})
