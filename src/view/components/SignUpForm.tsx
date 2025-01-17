'use client'

import { useState } from 'react'
import Link from 'next/link'
import Client from '@/libs/clients/client'

export function SignupForm() {
  const client = new Client()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [provideAdditionalInfo, setProvideAdditionalInfo] = useState(false)
  const [physicalActivity, setPhysicalActivity] = useState('')
  const [smoking, setSmoking] = useState('')
  const [alcohol, setAlcohol] = useState('')
  const [dietaryPreferences, setDietaryPreferences] = useState('')
  const [averageSleepHours, setAverageSleepHours] = useState('')
  const [dailyWaterIntake, setDailyWaterIntake] = useState('')
  const [healthGoals, setHealthGoals] = useState('')
  const [medicationAllergies, setMedicationAllergies] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const additionalInfo = {
        physicalActivity,
        smoking,
        alcohol,
        dietaryPreferences,
        averageSleepHours,
        dailyWaterIntake,
        healthGoals,
        medicationAllergies
      }

      const data = {
        name,
        email,
        password,
        height: parseFloat(height),
        weight: parseFloat(weight),
        additionalInfo: provideAdditionalInfo ? additionalInfo : null
      }

      await client.signUp(data)
      alert('Cadastro realizado com sucesso!')
    } catch (err) {
      setError(`Erro ao cadastrar. Por favor, tente novamente. ${err}`)
    }
  }

  return (
    <div className="card w-4/6 bg-base-100 shadow-xl border text-black">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-center mb-2">NutriAI</h2>

        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-wrap gap-4">
            <div className="form-control flex-1 min-w-[200px]">
              <label className="label" htmlFor="name">
                <span className="label-text">Nome</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 min-w-[200px]">
              <label className="label" htmlFor="email-address">
                <span className="label-text">Endereço de e-mail</span>
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="form-control flex-1 min-w-[200px]">
              <label className="label" htmlFor="password">
                <span className="label-text">Senha</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 min-w-[200px]">
              <label className="label" htmlFor="height">
                <span className="label-text">Altura (em cm)</span>
              </label>
              <input
                id="height"
                name="height"
                type="number"
                step="0.1"
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="form-control flex-1 min-w-[200px]">
              <label className="label" htmlFor="weight">
                <span className="label-text">Peso (em kg)</span>
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                step="0.1"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control flex-1 min-w-[200px]">
              <label className="label">
                <span className="label-text">Deseja enviar informações adicionais para melhorar as resposta da IA?</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={provideAdditionalInfo ? 'yes' : 'no'}
                onChange={(e) => setProvideAdditionalInfo(e.target.value === 'yes')}
              >
                <option value="no">Não</option>
                <option value="yes">Sim</option>
              </select>
            </div>
          </div>

          {provideAdditionalInfo && (
            <div className="form-control border-t pt-4">
              <label className="label">
                <span className="label-text">Você pratica atividades físicas?</span>
              </label>
              <select
                className="select select-bordered w-full mb-4"
                value={physicalActivity}
                onChange={(e) => setPhysicalActivity(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="regularly">Regularmente</option>
                <option value="sometimes">Às vezes</option>
                <option value="never">Nunca</option>
              </select>

              <label className="label">
                <span className="label-text">Você fuma?</span>
              </label>
              <select
                className="select select-bordered w-full mb-4"
                value={smoking}
                onChange={(e) => setSmoking(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>

              <label className="label">
                <span className="label-text">Você consome álcool?</span>
              </label>
              <select
                className="select select-bordered w-full mb-4"
                value={alcohol}
                onChange={(e) => setAlcohol(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>

              <label className="label">
                <span className="label-text">Preferências alimentares</span>
              </label>
              <select
                className="select select-bordered w-full mb-4"
                value={dietaryPreferences}
                onChange={(e) => setDietaryPreferences(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="vegan">Vegano</option>
                <option value="vegetarian">Vegetariano</option>
                <option value="omnivore">Onívoro</option>
              </select>
              <div className="form-control flex-1 min-w-[200px]">
                <label className="label" htmlFor="height">
                  <span className="label-text">Média de tempo de sono</span>
                </label>
                <input
                  id="sleep-hours"
                  name="sleep-hours"
                  type="number"
                  step="1"
                  required
                  value={averageSleepHours}
                  onChange={(e) => setAverageSleepHours(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <label className="label">
                <span className="label-text">Consumo diário de água (em litros)</span>
              </label>
              <input
                id="daily-water"
                name="daily-water"
                type="number"
                step="0.1"
                value={dailyWaterIntake}
                onChange={(e) => setDailyWaterIntake(e.target.value)}
                className="input input-bordered w-full mb-4"
              />

              <label className="label">
                <span className="label-text">Objetivos de saúde e bem-estar</span>
              </label>
              <textarea
                id="health-goals"
                name="health-goals"
                value={healthGoals}
                onChange={(e) => setHealthGoals(e.target.value)}
                className="textarea textarea-bordered w-full mb-4"
              />

              <label className="label">
                <span className="label-text">Alergias a medicamentos</span>
              </label>
              <textarea
                id="medication-allergies"
                name="medication-allergies"
                value={medicationAllergies}
                onChange={(e) => setMedicationAllergies(e.target.value)}
                className="textarea textarea-bordered w-full mb-4"
              />
            </div>
          )}

          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-black">
              Já tem uma conta?{' '}
              <Link href="/login" className="link link-primary">
                Entrar
              </Link>
            </p>
            <button type="submit" className="btn btn-primary w-60">
              Cadastrar
            </button>
          </div>
        </form>
        {error && (
          <div className="alert alert-error mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}
