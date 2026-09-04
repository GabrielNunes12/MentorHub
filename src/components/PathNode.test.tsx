import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import PathNode from './PathNode'

const getColorDot = (container: HTMLElement) =>
  container.firstElementChild?.firstElementChild as HTMLElement | undefined

describe('PathNode', () => {
  it('renders the neutral variant by default', () => {
    const { container } = render(<PathNode />)
    expect(getColorDot(container)?.className).toContain('bg-edge')
  })

  it('renders the games variant color', () => {
    const { container } = render(<PathNode variant="games" />)
    expect(getColorDot(container)?.className).toContain('bg-games')
  })

  it('renders the outsourcing variant color', () => {
    const { container } = render(<PathNode variant="outsourcing" />)
    expect(getColorDot(container)?.className).toContain('bg-outsourcing')
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
