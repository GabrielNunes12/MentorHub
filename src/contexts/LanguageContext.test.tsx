import { renderHook, waitFor } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { ReactNode } from 'react'
import { LanguageProvider } from './LanguageContext'
import { useLanguage } from '../hooks/useLanguage'

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
)

describe('LanguageProvider / useLanguage', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('defaults to English when there is no saved preference', async () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })

    await waitFor(() => expect(result.current.language).toBe('en'))
    expect(result.current.t('navbar.home')).toBe('Home')
  })

  it('honors a language saved in localStorage', async () => {
    localStorage.setItem('appLanguage', 'pt')
    const { result } = renderHook(() => useLanguage(), { wrapper })

    await waitFor(() => expect(result.current.language).toBe('pt'))
    expect(result.current.t('navbar.home')).toBe('Início')
  })

  it('ignores an invalid saved language and falls back to detection', async () => {
    localStorage.setItem('appLanguage', 'fr')
    const { result } = renderHook(() => useLanguage(), { wrapper })

    await waitFor(() => expect(result.current.language).toBe('en'))
  })

  it('changeLanguage updates state and persists the choice', async () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })
    await waitFor(() => expect(result.current.language).toBe('en'))

    act(() => result.current.changeLanguage('es'))

    expect(result.current.language).toBe('es')
    expect(localStorage.getItem('appLanguage')).toBe('es')
    expect(result.current.t('navbar.home')).toBe('Inicio')
  })

  it('t() falls back to the raw key path when a translation is missing', async () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })
    await waitFor(() => expect(result.current.language).toBe('en'))

    expect(result.current.t('this.key.does.not.exist')).toBe('this.key.does.not.exist')
  })

  it('throws when used outside a LanguageProvider', () => {
    expect(() => renderHook(() => useLanguage())).toThrow(
      'useLanguage must be used within a LanguageProvider'
    )
  })
})
