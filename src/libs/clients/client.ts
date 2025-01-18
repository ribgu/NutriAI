import axios, { AxiosInstance } from 'axios'
import { CreateUserCommand } from '../services/user/create-user/create-user'
import { ActivityRecord } from '@/types/ActivityRecord'
import { getActivityCommand } from '@/types/GetActivityCommand'

type DefaultResponse = {
  message: string
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

  async getActivityRecords(command: getActivityCommand): Promise<GetActivityRecordsResponse> {
    try {
      const response = await this.axios.get<GetActivityRecordsResponse>(`/activity?userId=${command.userId}&type=${command.type}`, {
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
