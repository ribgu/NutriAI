'use client'

import React from 'react'
import { useGetActivityList } from '@/libs/hooks/activitys/use-get-activity-list'
import { Sleep, Water } from './ActivityComponents'
import { ActivityRecord } from '@/types/ActivityRecord'
import { SleepRecordInfo, WaterRecordInfo } from '@/types/RecordInfo'

function ActivityList() {
  const { data: records, isLoading, error } = useGetActivityList()

  const renderRecordInfo = (record: ActivityRecord) => {
    if (record.type === 'SLEEP') {
      const sleepInfo = record.RecordInfo as unknown as SleepRecordInfo

      return <Sleep recordInfo={sleepInfo} />
    }
    
    if (record.type === 'WATER') {
      const waterInfo = record.RecordInfo as unknown as WaterRecordInfo
      
      return <Water recordInfo={waterInfo} />
    }
    
    return (
      <>
        <p><strong>Tipo:</strong> {record.type}</p>
        <p><strong>Informações:</strong> {JSON.stringify(record.RecordInfo)}</p>
      </>
    )
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
        <ul className="space-y-6">
          {Array.isArray(records) && records.length > 0 ? (
            records.map((record) => (
              <li key={record.createdAt} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {renderRecordInfo(record)}
                {record.createdAt && (
                  <p className="text-sm opacity-75 mt-3">
                    Registrado em {new Date(record.createdAt).toLocaleString()}
                  </p>
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
