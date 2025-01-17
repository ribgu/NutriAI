"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Client from '@/libs/clients/client'
import { RecordType } from '@/types/RecordType'

const ActivityForm = () => {
  const [type, setType] = useState<RecordType>('WATER')
  const [recordInfo, setRecordInfo] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const client = new Client()
    const user = sessionStorage.getItem('user')
    const userId = user ? JSON.parse(user).id : ''

    try {
      await client.createActivityRecord({ userId, type, recordInfo })
      router.push('/dashboard')
    } catch (err) {
      console.error('Error creating activity record:', err)
      setError('Erro ao criar registro de atividade. Tente novamente mais tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label" htmlFor="type">
          <span className="label-text">Tipo de Atividade</span>
        </label>
        <select
          id="type"
          name="type"
          required
          value={type}
          onChange={(e) => setType(e.target.value as RecordType)}
          className="select select-bordered w-full"
        >
          <option value="WATER">Água</option>
          <option value="MEAL">Refeição</option>
          <option value="EXERCISE">Exercício</option>
          <option value="SLEEP">Sono</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label" htmlFor="recordInfo">
          <span className="label-text">Informações do Registro</span>
        </label>
        <textarea
          id="recordInfo"
          name="recordInfo"
          required
          value={JSON.stringify(recordInfo)}
          onChange={(e) => setRecordInfo(JSON.parse(e.target.value))}
          className="textarea textarea-bordered w-full"
        />
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
          {isLoading ? 'Adicionando...' : 'Adicionar Registro'}
        </button>
      </div>
      {error && (
        <div className="alert alert-error mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </form>
  )
}

export default ActivityForm
