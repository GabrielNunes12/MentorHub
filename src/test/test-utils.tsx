import type { ReactElement, ReactNode } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from '../contexts/LanguageContext'

interface ProvidersProps {
  children: ReactNode
  route?: string
}

const AllProviders = ({ children, route = '/' }: ProvidersProps) => (
  <HelmetProvider>
    <LanguageProvider>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </LanguageProvider>
  </HelmetProvider>
)

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string
}

export const renderWithProviders = (ui: ReactElement, options: CustomRenderOptions = {}) => {
  const { route, ...renderOptions } = options
  return render(ui, {
    wrapper: ({ children }) => <AllProviders route={route}>{children}</AllProviders>,
    ...renderOptions,
  })
}

export * from '@testing-library/react'
