'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
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
  isLoading: boolean
  signIn: (credentials: LoginCommand) => Promise<SignInResponse>
  signOut: () => void
  getUserId: () => string | null
  getStoredUser: () => User | null
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

const saveUserToStorage = (user: User | null, token: string | null) => {
  if (user && token) {
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('userId', user.id)
    sessionStorage.setItem('userName', user.name)
    sessionStorage.setItem('userEmail', user.email)
    sessionStorage.setItem('userRole', user.role)
  } else {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('userEmail')
    sessionStorage.removeItem('userRole')
  }
}

const getUserFromStorage = (): { user: User | null, token: string | null } => {
  if (typeof window === 'undefined') return { user: null, token: null }
  
  const token = sessionStorage.getItem('token')
  const id = sessionStorage.getItem('userId')
  
  if (!token || !id) return { user: null, token: null }
  
  return {
    token,
    user: {
      id,
      name: sessionStorage.getItem('userName') || '',
      email: sessionStorage.getItem('userEmail') || '',
      role: sessionStorage.getItem('userRole') || '',
    }
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const isAuthenticated = !!user

  const getUserId = () => {
    return user?.id || null
  }

  const getStoredUser = () => {
    return user
  }

  useEffect(() => {
    const loadUserFromStorage = () => {
      const stored = getUserFromStorage()
      if (stored.user && stored.token) {
        setUser(stored.user)
        setToken(stored.token)
      }
      setIsLoading(false)
    }

    loadUserFromStorage()
  }, [])

  useEffect(() => {
    saveUserToStorage(user, token)
  }, [user, token])

  async function signIn(command: LoginCommand): Promise<SignInResponse> {
    try {
      const response = await axios.post<SignInResponse>('api/user/signin', command, {
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
    setToken(null)
    saveUserToStorage(null, null)
    Router.push('/')
  }

  if (isLoading) {
    return null // or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ 
      token, 
      user, 
      isAuthenticated,
      isLoading, 
      signIn, 
      signOut,
      getUserId,
      getStoredUser
    }}
    >
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
