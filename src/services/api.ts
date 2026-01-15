import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ApiResponse } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

class ApiService {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Add request interceptor
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('authToken')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // Add response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('authToken')
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  async get<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.get<T>(url)
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async post<T>(url: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.post<T>(url, data)
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async put<T>(url: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.put<T>(url, data)
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.delete<T>(url)
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      }
    } catch (error) {
      return this.handleError(error)
    }
  }

  private handleError(error: unknown): ApiResponse<never> {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data?.message || error.message,
        statusCode: error.response?.status || 500,
      }
    }
    return {
      success: false,
      error: 'An unexpected error occurred',
      statusCode: 500,
    }
  }
}

export default new ApiService()
