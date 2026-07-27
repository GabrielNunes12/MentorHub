import '@testing-library/jest-dom/vitest'
import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

if (!('matchMedia' in window)) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

beforeEach(() => {
  // Network is disabled by default so hooks fall back to their offline
  // behavior; tests that need a specific response re-stub this.
  vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('network disabled in tests'))))
})

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})
