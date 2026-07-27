import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  it('reflects the dark class already present on <html> at mount', () => {
    document.documentElement.classList.add('dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current.isDark).toBe(true)
  })

  it('defaults to light when <html> has no dark class', () => {
    document.documentElement.classList.remove('dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current.isDark).toBe(false)
  })

  it('toggling on adds the dark class and persists the choice', () => {
    const { result } = renderHook(() => useTheme())

    act(() => result.current.toggleTheme())

    expect(result.current.isDark).toBe(true)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('toggling off removes the dark class and persists the choice', () => {
    document.documentElement.classList.add('dark')
    const { result } = renderHook(() => useTheme())

    act(() => result.current.toggleTheme())

    expect(result.current.isDark).toBe(false)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('a freshly mounted instance picks up a theme toggled by another instance', () => {
    const first = renderHook(() => useTheme())
    act(() => first.result.current.toggleTheme())

    const second = renderHook(() => useTheme())
    expect(second.result.current.isDark).toBe(true)
  })
})
