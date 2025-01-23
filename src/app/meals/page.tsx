import React from 'react'
import AppLayout from '@/view/components/AppLayout/AppLayout'
import { Meal } from '@/view/pages/Meal/Meal'

export default function Dashboard() {
  return (
    <AppLayout>
      <Meal />
    </AppLayout>
  )
}
