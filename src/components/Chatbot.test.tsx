import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen, waitFor, within } from '../test/test-utils'
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

  it('closes via the header close button', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    const dialog = screen.getByRole('dialog')

    await user.click(within(dialog).getByRole('button', { name: 'Close chat' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders a quick-reply button for every predefined question, plus a restart button', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))

    expect(screen.getByRole('button', { name: 'What services do you offer?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'How much does mentorship cost?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'How long does a session last?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Do you offer flexible scheduling?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'I want to get in touch' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Start over' })).toBeInTheDocument()
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

  it('appends multiple question/answer pairs in the order they were asked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'What services do you offer?' }))
    await user.click(screen.getByRole('button', { name: 'Do you offer flexible scheduling?' }))

    const dialog = screen.getByRole('dialog')
    const serviceAnswer = within(dialog).getByText(/Game Development Mentorship and Technical Consulting/)
    const schedulingAnswer = within(dialog).getByText(/different time zones/)

    // The scheduling question was asked after the services question, so its answer
    // must appear later in the DOM (chat log renders top-to-bottom in ask order).
    expect(
      serviceAnswer.compareDocumentPosition(schedulingAnswer) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it('redirects to the contact page when the user asks to get in touch', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'I want to get in touch' }))

    expect(await screen.findByText(/Taking you to our contact page/)).toBeInTheDocument()
  })

  it('closes the widget once the contact redirect fires', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'I want to get in touch' }))
    await screen.findByText(/Taking you to our contact page/)

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('resets the conversation when "Start over" is clicked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'How long does a session last?' }))
    expect(screen.getByText(/Sessions are typically 60 minutes/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Start over' }))
    expect(screen.queryByText(/Sessions are typically 60 minutes/)).not.toBeInTheDocument()
    expect(screen.getByText(/pick a question below/i)).toBeInTheDocument()
  })
})
