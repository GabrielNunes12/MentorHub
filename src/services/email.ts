export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
}

export interface EmailResponse {
  success: boolean
  message: string
}

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: result.error || 'Failed to send message. Please try again later.',
      }
    }

    return {
      success: true,
      message: result.message || 'Message sent successfully',
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('❌ Error sending contact message:', error)

    return {
      success: false,
      message: `Failed to send message: ${errorMessage}. Check browser console for details.`,
    }
  }
}
