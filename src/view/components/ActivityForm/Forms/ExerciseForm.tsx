import { SetStateAction } from 'react'

type ExerciseFormProps = {
  trainingDescription: string
  setTrainingDescription: React.Dispatch<SetStateAction<string>>
}

export function ExerciseForm(props: ExerciseFormProps) {
  const { trainingDescription, setTrainingDescription } = props

  return (
    <div className="form-control">
      <label className="label" htmlFor="trainingDescription">
        <span className="label-text">Descrição do Exercício</span>
      </label>
      <textarea
        id="trainingDescription"
        name="trainingDescription"
        required
        value={trainingDescription}
        onChange={(e) => setTrainingDescription(e.target.value)}
        className="textarea textarea-bordered w-full"
      />
    </div>
  )
}
