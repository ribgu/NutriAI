"use client";

import React, { useEffect, useState } from 'react'
import Client from '@/libs/clients/client'

const ActivityList = () => {
  const [records, setRecords] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchRecords = async () => {
      setIsLoading(true)
      const client = new Client()

      try {
        const response = await client.getActivityRecords()
        setRecords(response.records)
      } catch (err) {
        console.error('Error fetching activity records:', err)
        setError('Erro ao buscar registros de atividades. Tente novamente mais tarde.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecords()
  }, [])

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <div className="alert alert-error mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      ) : (
        <ul className="space-y-4">
          {records.map((record) => (
            <li key={record.id} className="p-4 border rounded-lg">
              <p><strong>Tipo:</strong> {record.type}</p>
              <p><strong>Informações:</strong> {JSON.stringify(record.RecordInfo)}</p>
              <p><strong>Data:</strong> {new Date(record.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ActivityList
