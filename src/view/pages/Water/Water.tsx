'use client'

import React, { useState } from 'react'
import ActivityForm from '@/view/components/ActivityForm/ActivityForm'
import ActivityList from '@/view/components/ActivityList/ActivityList'
import { XIcon } from 'lucide-react'

export function Water() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Registros de Atividades</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Novo Registro de Água
        </button>
      </div>

      <ActivityList activityType='WATER' />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Adicionar Registro de Água</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <ActivityForm activityType='WATER' />
          </div>
        </div>
      )}
    </div>
  )
}
