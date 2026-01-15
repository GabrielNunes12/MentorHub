import { useState, useCallback } from 'react'

interface UseThemeReturn {
  isDark: boolean
  toggleTheme: () => void
}

export const useTheme = (): UseThemeReturn => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newValue = !prev
      if (typeof window !== 'undefined') {
        if (newValue) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', newValue ? 'dark' : 'light')
      }
      return newValue
    })
  }, [])

  return { isDark, toggleTheme }
}
