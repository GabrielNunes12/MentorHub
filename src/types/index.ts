export interface Mentor {
  id: string
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  social: {
    linkedin?: string
    github?: string
    twitter?: string
    email?: string
  }
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: string
  features: string[]
  icon: string
}

export interface Testimonial {
  id: string
  studentName: string
  studentImage: string
  studentCompany: string
  studentRole: string
  content: string
  rating: number
  date: string
}

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  author: string
  date: string
  tags: string[]
  image: string
  readTime: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  statusCode: number
}
// Pricing types
export interface RegionStrategy {
  code: 'BR' | 'EU' | 'UK' | 'US'
  name: string
  currency: { symbol: string; code: string; name: string }
  countryCodes: string[]
  convertPrice: (usdPrice: number) => number
}

export type RegionCode = 'BR' | 'EU' | 'UK' | 'US'