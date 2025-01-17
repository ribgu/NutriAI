'use client'

import { useState } from 'react'
import Link from 'next/link'
import Client from '@/libs/clients/client'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const client = new Client()

    try {
      const response = await client.signIn({ email, password })
      if (response.user) {
        sessionStorage.setItem('user', JSON.stringify(response.user))
      }
      if (response.token) {
        sessionStorage.setItem('token', response.token)
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Erro desconhecido. Tente novamente mais tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border text-black">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-center mb-2">NutriAI</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label" htmlFor="email-address">
              <span className="label-text">Endereço de e-mail</span>
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Senha</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-sm">
              <Link href="/forgot-password" className="link link-primary">
                Esqueceu sua senha?
              </Link>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>
        {error && (
          <div className="alert alert-error mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <div className="text-center mt-4">
          <p className="text-sm text-black">
            Não tem uma conta?{' '}
            <Link href="/cadastre-se" className="link link-primary">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
