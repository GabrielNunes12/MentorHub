import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import PathNode from './PathNode'

const getColorDot = (container: HTMLElement) =>
  container.firstElementChild?.firstElementChild as HTMLElement | undefined

describe('PathNode', () => {
  it('renders the neutral variant by default', () => {
    const { container } = render(<PathNode />)
    expect(getColorDot(container)?.className).toContain('bg-gray-300')
  })

  it('renders the gaming variant color', () => {
    const { container } = render(<PathNode variant="gaming" />)
    expect(getColorDot(container)?.className).toContain('bg-gaming')
  })

  it('renders the professional variant color', () => {
    const { container } = render(<PathNode variant="professional" />)
    expect(getColorDot(container)?.className).toContain('bg-professional')
  })

  it('renders the connection variant color', () => {
    const { container } = render(<PathNode variant="connection" />)
    expect(getColorDot(container)?.className).toContain('bg-connection')
  })

  it('scales sizing classes with the size prop', () => {
    const { container } = render(<PathNode size="lg" />)
    expect(getColorDot(container)?.className).toContain('w-4')
  })

  it('applies the animate-pulse class when animated', () => {
    const { container } = render(<PathNode animated />)
    expect(getColorDot(container)?.className).toContain('animate-pulse')
  })

  it('forwards a custom className to the outer wrapper', () => {
    const { container } = render(<PathNode className="my-marker" />)
    expect(container.querySelector('div')?.className).toContain('my-marker')
  })
})
