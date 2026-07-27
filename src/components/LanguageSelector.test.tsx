import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test/test-utils'
import { LanguageSelector } from './LanguageSelector'

describe('LanguageSelector', () => {
  it('renders a flag button for each supported language', () => {
    renderWithProviders(<LanguageSelector />)

    expect(screen.getByTitle('English')).toBeInTheDocument()
    expect(screen.getByTitle('Português')).toBeInTheDocument()
    expect(screen.getByTitle('Español')).toBeInTheDocument()
  })

  it('highlights English as active by default', () => {
    renderWithProviders(<LanguageSelector />)

    expect(screen.getByTitle('English').className).toContain('shadow-glow-purple')
    expect(screen.getByTitle('Português').className).not.toContain('shadow-glow-purple')
  })

  it('switches the active language and persists the choice on click', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LanguageSelector />)

    await user.click(screen.getByTitle('Português'))

    expect(screen.getByTitle('Português').className).toContain('shadow-glow-purple')
    expect(localStorage.getItem('appLanguage')).toBe('pt')
  })
})
