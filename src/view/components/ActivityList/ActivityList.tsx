'use client'

import React from 'react'
import { useGetActivityList } from '@/libs/hooks/activitys/use-get-activity-list'
import { Sleep } from './ActivityComponents'

function ActivityList() {
  const { data: records, isLoading, error } = useGetActivityList()

  const renderRecordInfo = (record: any) => {
    if (record.type === 'SLEEP') {
      return <Sleep recordInfo={record.RecordInfo} />
    }
    
    return <p><strong>Informações:</strong> {JSON.stringify(record.RecordInfo)}</p>
  }

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : error ? (
        <div className="alert alert-error mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error.message}</span>
        </div>
      ) : (
        <ul className="space-y-4">
          {Array.isArray(records) && records.length > 0 ? (
            records.map((record, index) => (
              <li key={index} className="p-4 border rounded-lg">
                <p><strong>Tipo:</strong> {record.type}</p>
                {renderRecordInfo(record)}
                {record.createdAt && (
                  <p><strong>Data:</strong> {new Date(record.createdAt).toLocaleString()}</p>
                )}
              </li>
            ))
          ) : (
            <p>Nenhum registro encontrado.</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default ActivityList
