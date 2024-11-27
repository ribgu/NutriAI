'use client'

import { useState } from 'react'
import Link from 'next/link'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    // Aqui você implementaria a lógica de autenticação
    console.log('Login attempt', { email, password })
    // Simulating an error for demonstration
    setError('Credenciais inválidas. Por favor, tente novamente.')
  }

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-center mb-2">NutriAI</h2>
        <p className="text-center text-sm mb-6">Seu assistente pessoal de nutrição</p>
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
              placeholder="seu@email.com"
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
              placeholder="••••••••"
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
            <button type="submit" className="btn btn-primary w-full">
              Entrar
            </button>
          </div>
        </form>
        {error && (
          <div className="alert alert-error mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span>
          </div>
        )}
        <div className="text-center mt-4">
          <p className="text-sm">
            Não tem uma conta?{' '}
            <Link href="/signup" className="link link-primary">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

