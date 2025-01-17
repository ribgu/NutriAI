import { SetStateAction } from 'react'

type MealFormProps = {
  foodDescription: string
  setFoodDescription: React.Dispatch<SetStateAction<string>>
}

export function MealForm(props: MealFormProps) {
  const { foodDescription, setFoodDescription } = props

  return (
    <div className="form-control">
      <label className="label" htmlFor="foodDescription">
        <span className="label-text">Descrição da Refeição</span>
      </label>
      <textarea
        id="foodDescription"
        name="foodDescription"
        required
        value={foodDescription}
        onChange={(e) => setFoodDescription(e.target.value)}
        className="textarea textarea-bordered w-full"
      />
    </div>
  )
}
