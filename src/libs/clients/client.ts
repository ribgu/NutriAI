import axios, { AxiosInstance } from 'axios'
import { CreateUserCommand } from '../services/user/create-user/create-user'
import { LoginCommand } from '../services/user/create-user/login'
import { User } from '@prisma/client'

type DefaultResponse = {
  message: string
}

type SignInResponse = {
  message: string
  token: string
  user: User
}

export default class Client {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: '/api'
    })
  }

  async signUp(userData: CreateUserCommand): Promise<DefaultResponse> {
    try {
      const response = await this.axios.post<DefaultResponse>('/user/signup', userData, {
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

  async signIn(loginData: LoginCommand): Promise<SignInResponse> {
    try {
      const response = await this.axios.post<SignInResponse>('/user/signin', loginData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return response.data
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Sign in failed:', error.response?.data)
        throw new Error(error.response?.data?.message || 'Sign in failed')
      }
      throw error
    }
  }
}
