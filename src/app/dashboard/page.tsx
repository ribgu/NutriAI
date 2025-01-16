import React from 'react'
import AppLayout from '@/view/components/AppLayout/AppLayout'
import ActivityForm from '@/view/components/ActivityForm'
import ActivityList from '@/view/components/ActivityList'

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Adicionar Registro de Atividade</h2>
            <ActivityForm />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Registros de Atividades</h2>
            <ActivityList />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
