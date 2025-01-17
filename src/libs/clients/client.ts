import axios, { AxiosInstance } from 'axios'
import { CreateUserCommand } from '../services/user/create-user/create-user'
import { LoginCommand } from '../services/user/create-user/login'
import { User } from '@prisma/client'
import { ActivityRecord } from '@/types/ActivityRecord'

type DefaultResponse = {
  message: string
}

type SignInResponse = {
  message: string
  token: string
  user: User
}

type ActivityRecordResponse = {
  message: string
  record: ActivityRecord
}

type GetActivityRecordsResponse = {
  records: ActivityRecord[]
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
        throw new Error(error.response?.data?.message || 'Sign in failed')
      }
      throw error
    }
  }

  async createActivityRecord(recordData: ActivityRecord): Promise<ActivityRecordResponse> {
    try {
      const response = await this.axios.post<ActivityRecordResponse>('/activity', recordData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Create activity record failed')
      }
      throw error
    }
  }

  async getActivityRecords(userId: string): Promise<GetActivityRecordsResponse> {
    try {
      const response = await this.axios.get<GetActivityRecordsResponse>(`/activity?userId=${userId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Get activity records failed')
      }
      throw error
    }
  }
}
