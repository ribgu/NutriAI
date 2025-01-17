import React, { useEffect, useState } from 'react'
import Client from '@/libs/clients/client'
import { ActivityRecord } from '@/types/ActivityRecord'

const ActivityList = () => {
  const [records, setRecords] = useState<ActivityRecord[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const user = sessionStorage.getItem('user')
  const userId = user ? JSON.parse(user).id : ''

  useEffect(() => {
    const fetchRecords = async () => {
      setIsLoading(true)
      const client = new Client()

      try {
        const response = await client.getActivityRecords(userId)
        setRecords(response.records)
      } catch (err) {
        console.error('Error fetching activity records:', err)
        setError('Erro ao buscar registros de atividades. Tente novamente mais tarde.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecords()
  }, [userId])

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
          {records.map((record, index) => (
            <li key={index} className="p-4 border rounded-lg">
              <p><strong>Tipo:</strong> {record.type}</p>
              <p><strong>Informações:</strong> {JSON.stringify(record.RecordInfo)}</p>
                {record.createdAt && (
                <p><strong>Data:</strong> {new Date(record.createdAt).toLocaleString()}</p>
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ActivityList
