import { createContext, useContext, useState, ReactNode } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { LoginCommand } from '@/libs/services/user/create-user/login'

type User = {
  id: string
  name: string
  email: string
  role: string
}

type SignInResponse = {
  message: string
  token: string
  user: User
}

type AuthContextData = {
  token: string | null
  user: User | null
  isAuthenticated: boolean
  signIn: (credentials: LoginCommand) => Promise<SignInResponse>
  signOut: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const isAuthenticated = !!user

  async function signIn(command: LoginCommand): Promise<SignInResponse> {
    try {
      const response = await axios.post<SignInResponse>('/user/signin', command, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setUser(response.data.user)
      setToken(response.data.token)

      return response.data
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Sign in failed')
      }
      throw error
    }
  }

  function signOut() {
    setUser(null)
    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
