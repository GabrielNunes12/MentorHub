import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test-utils'
import AppRoutes from '../../AppRoutes'

const HOME_HERO_EYEBROW = 'GAMES STUDIO · IT OUTSOURCING'

describe('chatbot integration', () => {
  it('is available on the home page and answers a question without leaving the page', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'What does MentorHub do?' }))

    expect(screen.getByText(/two lines of business/)).toBeInTheDocument()
    // Still on the Home route — answering a regular question shouldn't navigate anywhere.
    expect(screen.getByText(HOME_HERO_EYEBROW)).toBeInTheDocument()
  })

  it('navigates from the About page to the real Contact page when the user asks to get in touch', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/about' })

    expect(await screen.findByRole('heading', { name: /About MentorHub/ })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'I want to get in touch' }))

    // Confirms an actual route change happened, not just a mocked navigate call.
    expect(await screen.findByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('stays mounted and keeps its conversation when the user navigates via the navbar', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'How does outsourcing work?' }))
    expect(screen.getByText(/You hand us the whole project/)).toBeInTheDocument()

    const [navAbout] = screen.getAllByRole('link', { name: './about' })
    await user.click(navAbout)

    expect(await screen.findByRole('heading', { name: /About MentorHub/ })).toBeInTheDocument()
    // Layout (and the Chatbot inside it) persists across route changes, so the
    // previous answer should still be there instead of being reset.
    expect(screen.getByText(/You hand us the whole project/)).toBeInTheDocument()
  })
})
