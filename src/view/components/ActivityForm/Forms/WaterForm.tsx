import { SetStateAction } from 'react'

type WaterFormProps = {
  waterAmount: string
  setWaterAmount: React.Dispatch<SetStateAction<string>>
}

export function WaterForm(props: WaterFormProps) {
  const { waterAmount, setWaterAmount } = props

  return (
    <div className="form-control">
      <label className="label" htmlFor="waterAmount">
        <span className="label-text">Quantidade de Água (ml)</span>
      </label>
      <input
        id="waterAmount"
        name="waterAmount"
        type="number"
        required
        value={waterAmount}
        onChange={(e) => setWaterAmount(e.target.value)}
        className="input input-bordered w-full"
      />
    </div>
  )
}
