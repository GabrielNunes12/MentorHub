import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test-utils'
import AppRoutes from '../../AppRoutes'

describe('language switching', () => {
  it('propagates a language change across navbar, hero and footer at once', async () => {
    const user = userEvent.setup()
    renderWithProviders(<AppRoutes />, { route: '/' })

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Level Up Your')
    const [navAbout] = screen.getAllByRole('link', { name: 'About' })
    expect(navAbout).toBeInTheDocument()

    // Navbar renders the selector twice (desktop + mobile); either flips the
    // same shared language state.
    const [ptButton] = screen.getAllByTitle('Português')
    await user.click(ptButton)

    await vi.waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Eleve seu')
    )
    expect(screen.getAllByRole('link', { name: 'Sobre' })[0]).toBeInTheDocument()
    expect(localStorage.getItem('appLanguage')).toBe('pt')
  })

  it('remembers a language saved from a previous visit', () => {
    localStorage.setItem('appLanguage', 'es')
    renderWithProviders(<AppRoutes />, { route: '/' })

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Mejora tu')
  })
})
