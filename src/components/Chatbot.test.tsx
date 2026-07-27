import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test/test-utils'
import Chatbot from './Chatbot'

describe('Chatbot', () => {
  it('is closed by default and opens when the toggle button is clicked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open chat' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/pick a question below/i)).toBeInTheDocument()
  })

  it('answers a predefined question inline', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'How long does a session last?' }))

    // One instance is the quick-reply button, the other is the new chat bubble echoing the question
    expect(screen.getAllByText('How long does a session last?')).toHaveLength(2)
    expect(screen.getByText(/Sessions are typically 60 minutes/)).toBeInTheDocument()
  })

  it('redirects to the contact page when the user asks to get in touch', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'I want to get in touch' }))

    expect(await screen.findByText(/Taking you to our contact page/)).toBeInTheDocument()
  })

  it('resets the conversation when "Start over" is clicked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'How long does a session last?' }))
    expect(screen.getByText(/Sessions are typically 60 minutes/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Start over' }))
    expect(screen.queryByText(/Sessions are typically 60 minutes/)).not.toBeInTheDocument()
  })
})
