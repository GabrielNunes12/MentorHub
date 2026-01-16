import emailjs from '@emailjs/browser'

// Initialize EmailJS
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || ''

// Initialize only if credentials are provided
if (PUBLIC_KEY) {
  try {
    emailjs.init(PUBLIC_KEY)
    console.log('✅ EmailJS initialized successfully')
  } catch (error) {
    console.error('❌ EmailJS initialization failed:', error)
  }
}

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
  // Check if credentials are configured
  const missingVars = []
  if (!SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID')
  if (!TEMPLATE_ID) missingVars.push('VITE_EMAILJS_TEMPLATE_ID')
  if (!PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY')
  if (!CONTACT_EMAIL) missingVars.push('VITE_CONTACT_EMAIL')

  if (missingVars.length > 0) {
    return {
      success: false,
      message: `Email service not configured. Missing:\n${missingVars.join('\n')}\n\nSee browser console for details.`,
    }
  }

  try {
    const templateParams = {
      to_email: CONTACT_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      subject: data.subject,
      message: data.message,
    }


    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    
    return {
      success: true,
      message: response.text || 'Email sent successfully',
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('❌ Error sending email:', error)
    console.error('Error details:', errorMessage)

    return {
      success: false,
      message: `Failed to send email: ${errorMessage}. Check browser console for details.`,
    }
  }
}
