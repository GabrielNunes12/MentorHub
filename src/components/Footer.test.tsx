import { describe, expect, it } from 'vitest'
import { renderWithProviders, screen } from '../test/test-utils'
import Footer from './Footer'

const renderFooterInLanguage = (language: 'en' | 'pt' | 'es') => {
  localStorage.setItem('appLanguage', language)
  return renderWithProviders(<Footer />)
}

describe('Footer', () => {
  it.each([
    ['en', 'Quick Links', 'Platforms', 'Legal'],
    ['pt', 'Links Rápidos', 'Plataformas', 'Legal'],
    ['es', 'Enlaces Rápidos', 'Plataformas', 'Legal'],
  ] as const)('renders real column headings for %s, never a raw translation key', async (lang, quickLinks, platforms, legal) => {
    const { container } = renderFooterInLanguage(lang)

    expect(await screen.findByText(quickLinks)).toBeInTheDocument()
    expect(screen.getByText(platforms)).toBeInTheDocument()
    expect(screen.getByText(legal)).toBeInTheDocument()

    // Regression guard: every footer.* key must resolve to real copy. If any
    // key is missing from locales/translations.ts, t() falls back to the raw
    // dotted key string (e.g. "footer.platforms.title"), which would always
    // contain the literal substring "footer." in the rendered output.
    expect(container.textContent).not.toContain('footer.')
  })

  it('links the gaming and IT platform items to the right destinations', async () => {
    renderFooterInLanguage('en')

    expect(await screen.findByText('Game Development')).toHaveAttribute(
      'href',
      'https://mentorhubgaming.com'
    )
    expect(screen.getByText('IT Solutions').closest('a')).toHaveAttribute('href', '/services')
  })

  it('renders the copyright line with the current year interpolated', async () => {
    renderFooterInLanguage('en')

    const year = new Date().getFullYear().toString()
    expect(await screen.findByText(new RegExp(year))).toBeInTheDocument()
  })
})
