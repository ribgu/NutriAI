'use client'

import React, { useState } from 'react'
import { RecordType } from '@/types/RecordType'
import { useAuth } from '@/contexts/AuthContext'
import { WaterForm } from './Forms/WaterForm'
import { MealForm } from './Forms/MealForm'
import { ExerciseForm } from './Forms/ExerciseForm'
import { SleepForm } from './Forms/SleepForm'
import { useRouter } from 'next/navigation'
import { useSaveActivity } from '@/libs/hooks/activitys/use-save-activity'
import { MealRecordInfo } from '@/types/RecordInfo'

type ActivityFormProps = {
  activityType?: RecordType
}

function ActivityForm({ activityType }: ActivityFormProps) {
  const [type, setType] = useState<RecordType>(activityType || 'WATER')
  const [waterAmount, setWaterAmount] = useState(0)
  const [waterDateHour, setWaterDateHour] = useState<Date>(new Date())
  const [trainingDescription, setTrainingDescription] = useState('')
  const [sleepStart, setSleepStart] = useState('')
  const [sleepEnd, setSleepEnd] = useState('')
  const [mealInfo, setMealInfo] = useState<MealRecordInfo>({
    mealType: '',
    mealTime: '',
    foodDescription: '',
    hasBeverage: false,
    beverageDescription: '',
    beverageAmount: '',
    location: 'Casa',
    hungerLevel: '3',
    moodAfterEating: 'satisfied',
    estimatedCalories: ''
  })
  const router = useRouter()
  const { user } = useAuth()
  const mutation = useSaveActivity()

  function getSleepHopurs(start: string, end: string): number {
    const diffMilissegundos = new Date(end).getTime() - new Date(start).getTime()
  
    const hours = diffMilissegundos / (1000 * 60 * 60)

    return hours
  }

  const resetForm = () => {
    setWaterAmount(0)
    setTrainingDescription('')
    setSleepStart('')
    setSleepEnd('')
  }

  const handleMealInfoChange = (field: keyof MealRecordInfo, value: string | boolean) => {
    setMealInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    if (!user) router.push('/login')
    if(!user) return
    const userId = user.id
    e.preventDefault()

    let recordInfo = {}
    if (type === 'WATER') {
      recordInfo = { waterAmount }
    } else if (type === 'MEAL') {
      recordInfo = mealInfo
    } else if (type === 'EXERCISE') {
      recordInfo = { trainingDescription }
    } else if (type === 'SLEEP') {
      const sleepHours = getSleepHopurs(sleepStart,sleepEnd).toString()
      recordInfo = { sleepStart, sleepEnd, sleepHours }
    }

    mutation.mutate(
      { userId, type, RecordInfo: recordInfo },
      {
        onSuccess: () => {
          resetForm()
          router.push('/dashboard')
        }
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!activityType && (
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
      )}
      {type === 'WATER' && (
        <WaterForm
          waterDateHour={waterDateHour}
          setWaterDateHour={setWaterDateHour}
          waterAmount={waterAmount}
          setWaterAmount={setWaterAmount}
        />
      )}
      {type === 'MEAL' && (
        <MealForm
          mealInfo={mealInfo}
          onMealInfoChange={handleMealInfoChange}
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
          sleepStart={sleepStart}
          setSleepStart={setSleepStart}
          sleepEnd={sleepEnd}
          setSleepEnd={setSleepEnd}
        />
      )}
      <div className="form-control mt-6">
        <button 
          type="submit" 
          className="btn btn-primary w-full" 
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Adicionando...' : 'Adicionar Registro'}
        </button>
      </div>

      {mutation.isError && (
        <div className="alert alert-error mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{(mutation.error as Error).message}</span>
        </div>
      )}

      {mutation.isSuccess && (
        <div className="alert alert-success mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Registro adicionado com sucesso!</span>
        </div>
      )}
    </form>
  )
}

export default ActivityForm
