'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Client from '@/libs/clients/client'
import { RecordType } from '@/types/RecordType'
import { useAuth } from '@/contexts/AuthContext'
import { WaterForm } from './Forms/WaterForm'
import { MealForm } from './Forms/MealForm'
import { ExerciseForm } from './Forms/ExerciseForm'
import { SleepForm } from './Forms/SleepForm'

function ActivityForm() {
  const [type, setType] = useState<RecordType>('WATER')
  const [waterAmount, setWaterAmount] = useState('')
  const [foodDescription, setFoodDescription] = useState('')
  const [trainingDescription, setTrainingDescription] = useState('')
  const [sleepHour, setSleepHour] = useState('')
  const [wakeUpHour, setWakeUpHour] = useState('')
  const [sleepDuration, setSleepDuration] = useState(0)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const client = new Client()
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    if (!user) return
    const userId = user.id
    e.preventDefault()
    setError('')
    setIsLoading(true)

    let recordInfo = {}
    if (type === 'WATER') {
      recordInfo = { waterAmount }
    } else if (type === 'MEAL') {
      recordInfo = { foodDescription }
    } else if (type === 'EXERCISE') {
      recordInfo = { trainingDescription }
    } else if (type === 'SLEEP') {
      recordInfo = { sleepHour, wakeUpHour, sleepDuration }
    }

    try {
      await client.createActivityRecord({ userId, type, RecordInfo: recordInfo })
      router.push('/dashboard')
    } catch (err) {
      setError(`Erro ao criar registro de atividade. Tente novamente mais tarde. ${err}`)
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
      {type === 'WATER' && (
        <WaterForm
          waterAmount={waterAmount}
          setWaterAmount={setWaterAmount}
        />
      )}
      {type === 'MEAL' && (
        <MealForm
          foodDescription={foodDescription}
          setFoodDescription={setFoodDescription}
        />
      )}
      {type === 'EXERCISE' && (
        <ExerciseForm
          setTrainingDescription={setTrainingDescription}
          trainingDescription={trainingDescription}
        />
      )}
      {type === 'SLEEP' && (
        <SleepForm
          sleepHour={sleepHour}
          setSleepHour={setSleepHour}
          wakeUpHour={wakeUpHour}
          setWakeUpHour={setWakeUpHour}
          sleepDuration={sleepDuration}
          setSleepDuration={setSleepDuration}
        />
      )}
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
