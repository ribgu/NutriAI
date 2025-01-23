import React from 'react'

type MealInfo = {
  mealType: string
  mealTime: string
  foodDescription: string
  hasBeverage: boolean
  beverageDescription: string
  beverageAmount: string
  location: string
  hungerLevel: string
  moodAfterEating: string
  estimatedCalories: string
}

type MealFormProps = {
  mealInfo: MealInfo
  onMealInfoChange: (field: keyof MealInfo, value: string | boolean) => void
}

const mealTypes = [
  'Café da manhã',
  'Lanche da manhã',
  'Almoço',
  'Lanche da tarde',
  'Jantar',
  'Ceia'
]

const locations = [
  'Casa',
  'Trabalho',
  'Restaurante',
  'Outro'
]

export function MealForm({ mealInfo, onMealInfoChange }: MealFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Coluna da Esquerda */}
      <div className="space-y-4">
        <div className="form-control">
          <label className="label" htmlFor="mealType">
            <span className="label-text">Tipo de Refeição</span>
          </label>
          <select
            id="mealType"
            value={mealInfo.mealType}
            onChange={(e) => onMealInfoChange('mealType', e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="">Selecione o tipo</option>
            {mealTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="location">
            <span className="label-text">Local da Refeição</span>
          </label>
          <select
            id="location"
            value={mealInfo.location}
            onChange={(e) => onMealInfoChange('location', e.target.value)}
            className="select select-bordered w-full"
          >
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="hungerLevel">
            <span className="label-text">Nível de Fome Antes (1-5)</span>
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={mealInfo.hungerLevel}
            onChange={(e) => onMealInfoChange('hungerLevel', e.target.value)}
            className="range"
            step="1"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>Pouca</span>
            <span>Média</span>
            <span>Muita</span>
          </div>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <span className="label-text">Consumiu alguma bebida?</span>
            <input
              type="checkbox"
              checked={mealInfo.hasBeverage}
              onChange={(e) => onMealInfoChange('hasBeverage', e.target.checked)}
              className="checkbox"
            />
          </label>
        </div>

        {mealInfo.hasBeverage && (
          <>
            <div className="form-control">
              <label className="label" htmlFor="beverageDescription">
                <span className="label-text">Qual bebida?</span>
              </label>
              <input
                type="text"
                id="beverageDescription"
                value={mealInfo.beverageDescription}
                onChange={(e) => onMealInfoChange('beverageDescription', e.target.value)}
                className="input input-bordered"
                placeholder="Ex: Água, Suco de Laranja, Refrigerante"
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="beverageAmount">
                <span className="label-text">Quantidade (ml)</span>
              </label>
              <input
                type="number"
                id="beverageAmount"
                value={mealInfo.beverageAmount}
                onChange={(e) => onMealInfoChange('beverageAmount', e.target.value)}
                className="input input-bordered"
                placeholder="200"
              />
            </div>
          </>
        )}
      </div>

      {/* Coluna da Direita */}
      <div className="space-y-4">
        <div className="form-control">
          <label className="label" htmlFor="mealTime">
            <span className="label-text">Horário da Refeição</span>
          </label>
          <input
            type="datetime-local"
            id="mealTime"
            value={mealInfo.mealTime}
            onChange={(e) => onMealInfoChange('mealTime', e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="foodDescription">
            <span className="label-text">Descrição detalhada dos alimentos</span>
          </label>
          <textarea
            id="foodDescription"
            value={mealInfo.foodDescription}
            onChange={(e) => onMealInfoChange('foodDescription', e.target.value)}
            className="textarea textarea-bordered"
            placeholder="Liste os alimentos e quantidades aproximadas"
            required
            rows={4}
          />
        </div>

        <div className="form-control">
          <label className="label" htmlFor="moodAfterEating">
            <span className="label-text">Como se sentiu após a refeição?</span>
          </label>
          <select
            id="moodAfterEating"
            value={mealInfo.moodAfterEating}
            onChange={(e) => onMealInfoChange('moodAfterEating', e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="satisfied">Satisfeito</option>
            <option value="tooFull">Muito Cheio</option>
            <option value="stillHungry">Ainda com Fome</option>
            <option value="uncomfortable">Desconfortável</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="estimatedCalories">
            <span className="label-text">Calorias Estimadas (opcional)</span>
          </label>
          <input
            type="number"
            id="estimatedCalories"
            value={mealInfo.estimatedCalories}
            onChange={(e) => onMealInfoChange('estimatedCalories', e.target.value)}
            className="input input-bordered"
            placeholder="Ex: 500"
          />
        </div>
      </div>
    </div>
  )
}
