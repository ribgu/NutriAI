'use client'

import React, { useState } from 'react'
import ActivityForm from '@/view/components/ActivityForm/ActivityForm'
import ActivityList from '@/view/components/ActivityList/ActivityList'
import { XIcon } from 'lucide-react'

export function Meal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Registros de Refeições</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Nova Refeição
        </button>
      </div>

      <ActivityList activityType='MEAL' />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Adicionar Refeição</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <ActivityForm activityType='MEAL' />
          </div>
        </div>
      )}
    </div>
  )
}
