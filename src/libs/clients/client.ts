import axios, { AxiosInstance } from 'axios'
import { CreateUserCommand } from '../services/user/create-user/create-user'

type DefaultResponse = {
  message: string
}

export default class Client {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.BASE_API_URL
    })
  }

  async signUp(userData: CreateUserCommand): Promise<DefaultResponse> {
    try {
      const response = await this.axios.post<DefaultResponse>('/api/signup', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Sign up failed:', error.response?.data)
        throw new Error(error.response?.data?.message || 'Sign up failed')
      }
      throw error
    }
  }
}
