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

    expect(screen.getByRole('button', { name: 'What does MentorHub do?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Can I see your games?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'How does outsourcing work?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Do you work with teams in different time zones?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'I want to get in touch' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Start over' })).toBeInTheDocument()
  })

  it('answers a predefined question inline', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'How does outsourcing work?' }))

    // One instance is the quick-reply button, the other is the new chat bubble echoing the question
    expect(screen.getAllByText('How does outsourcing work?')).toHaveLength(2)
    expect(screen.getByText(/You hand us the whole project/)).toBeInTheDocument()
  })

  it('appends multiple question/answer pairs in the order they were asked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Chatbot />, { route: '/' })

    await user.click(screen.getByRole('button', { name: 'Open chat' }))
    await user.click(screen.getByRole('button', { name: 'What does MentorHub do?' }))
    await user.click(screen.getByRole('button', { name: 'Do you work with teams in different time zones?' }))

    const dialog = screen.getByRole('dialog')
    const serviceAnswer = within(dialog).getByText(/two lines of business/)
    const schedulingAnswer = within(dialog).getByText(/time zones and adapt/)

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
    await user.click(screen.getByRole('button', { name: 'How does outsourcing work?' }))
    expect(screen.getByText(/You hand us the whole project/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Start over' }))
    expect(screen.queryByText(/You hand us the whole project/)).not.toBeInTheDocument()
    expect(screen.getByText(/pick a question below/i)).toBeInTheDocument()
  })
})
