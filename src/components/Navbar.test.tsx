import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test/test-utils'
import Navbar from './Navbar'

const hasExactClass = (element: HTMLElement, className: string) =>
  element.className.split(/\s+/).includes(className)

describe('Navbar', () => {
  it('renders a link for every nav item', () => {
    renderWithProviders(<Navbar />, { route: '/' })

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('highlights only the link matching the current route', () => {
    renderWithProviders(<Navbar />, { route: '/about' })

    expect(hasExactClass(screen.getByRole('link', { name: 'About' }), 'text-gaming')).toBe(true)
    expect(hasExactClass(screen.getByRole('link', { name: 'Home' }), 'text-gaming')).toBe(false)
  })

  it('toggles the dark class on <html> when the theme button is clicked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Navbar />, { route: '/' })

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    const [themeButton] = screen.getAllByRole('button', { name: 'Toggle theme' })
    await user.click(themeButton)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    await user.click(themeButton)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens the mobile menu and reveals a second set of nav links', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Navbar />, { route: '/' })

    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)
  })
})
