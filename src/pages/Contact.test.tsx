import { describe, expect, it, vi, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen, waitFor } from '../test/test-utils'
import Contact from './Contact'
import { sendEmail } from '../services/email'

vi.mock('../services/email', () => ({
  sendEmail: vi.fn(),
}))

const mockedSendEmail = vi.mocked(sendEmail)

const fillRequiredFields = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText('Full Name'), 'Jane Doe')
  await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
  await user.type(screen.getByLabelText('Subject'), 'Hello there')
  await user.type(screen.getByLabelText('Message'), 'This is my message.')
}

describe('Contact', () => {
  beforeEach(() => {
    localStorage.setItem('appLanguage', 'en')
    mockedSendEmail.mockReset()
  })

  it('renders all expected fields with "Outsourcing Project" selected by default and budget/timeline visible', () => {
    renderWithProviders(<Contact />)

    expect(screen.getByRole('radio', { name: 'Outsourcing Project' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Games & Partnerships' })).not.toBeChecked()

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone (Optional)')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()

    expect(screen.getByLabelText('Estimated Budget')).toBeInTheDocument()
    expect(screen.getByLabelText('Timeline')).toBeInTheDocument()

    expect(screen.getByPlaceholderText("I'd like to discuss an outsourced project")).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Tell us about your project — scope, goals, and rough timeline...')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('hides budget/timeline and swaps placeholders when switching to "Games & Partnerships"', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await user.click(screen.getByRole('radio', { name: 'Games & Partnerships' }))

    expect(screen.getByRole('radio', { name: 'Games & Partnerships' })).toBeChecked()
    expect(screen.queryByLabelText('Estimated Budget')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Timeline')).not.toBeInTheDocument()

    expect(screen.getByPlaceholderText('Question about a game, or a partnership inquiry')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText("Tell us which game you're asking about, or what kind of partnership you have in mind...")
    ).toBeInTheDocument()
  })

  it('shows required-field validation errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()

    expect(mockedSendEmail).not.toHaveBeenCalled()
  })

  it('rejects an invalid email format', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    // Use a value that passes the browser's native type="email" constraint
    // validation (which would otherwise block submission before React ever
    // sees it) but fails the component's stricter custom regex (no dot in
    // the domain part).
    await user.type(screen.getByLabelText('Email Address'), 'invalid@localhost')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText('Please enter a valid email')).toBeInTheDocument()
    expect(mockedSendEmail).not.toHaveBeenCalled()
  })

  it('shows a success status message after a successful submit', async () => {
    mockedSendEmail.mockResolvedValueOnce({ success: true, message: 'ok' })
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await fillRequiredFields(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText("Message sent successfully! We'll get back to you soon.")).toBeInTheDocument()
    expect(mockedSendEmail).toHaveBeenCalledTimes(1)
  })

  it('shows an error status message after a failed submit', async () => {
    mockedSendEmail.mockResolvedValueOnce({ success: false, message: 'Something went wrong on the server' })
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await fillRequiredFields(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText(/Error sending message/)).toBeInTheDocument()
    expect(screen.getByText('Something went wrong on the server')).toBeInTheDocument()
  })

  it('shows a generic error status message when sendEmail rejects unexpectedly', async () => {
    mockedSendEmail.mockRejectedValueOnce(new Error('network down'))
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await fillRequiredFields(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText(/Error sending message/)).toBeInTheDocument()
    expect(
      screen.getByText('An unexpected error occurred. Please check the browser console.')
    ).toBeInTheDocument()
  })

  it('waits for pending state changes to settle', async () => {
    mockedSendEmail.mockResolvedValueOnce({ success: true, message: 'ok' })
    const user = userEvent.setup()
    renderWithProviders(<Contact />)

    await fillRequiredFields(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    await waitFor(() => expect(mockedSendEmail).toHaveBeenCalled())
  })
})
