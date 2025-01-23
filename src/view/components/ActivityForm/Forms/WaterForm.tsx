import { CupSoda, Droplets, GlassWater, Milk } from 'lucide-react'
import { SetStateAction } from 'react'
import { Slider } from '@/view/components/FormUtils'

type WaterFormProps = {
  waterAmount: number
  setWaterAmount: React.Dispatch<SetStateAction<number>>
  waterDateHour: Date
}

export function WaterForm(props: WaterFormProps) {
  const { waterAmount, setWaterAmount } = props

  const handleSliderChange = (value: number[]) => {
    setWaterAmount(value[0])
  }

  const PREDEFINED_AMOUNTS = [
    { label: 'Copo Pequeno', value: '200', icon: <GlassWater className="h-4 w-4" /> },
    { label: 'Copo médio', value: '300', icon: <CupSoda className="h-5 w-5" /> },
    { label: 'Garrafa', value: '500', icon: <Milk className="h-6 w-6" /> },
    { label: 'Jarra', value: '1000', icon: <Droplets className="h-6 w-6" /> },
  ]

  return (
    <div className="form-control">
      <label className="label" htmlFor="waterAmount">
        <span className="label-text">Quantidade de Água</span>
        <div className="flex items-center gap-1">
          <input
            type="number"
            value={waterAmount || 0}
            onChange={(e) => setWaterAmount(Number(e.target.value))}
            className="input input-bordered input-sm w-20 text-right"
            min="0"
            max="10000"
            step="50"
          />
          <span className="text-xs">ml</span>
        </div>
      </label>
      <Slider
        max={10000}
        step={50}
        value={[Number(waterAmount) || 0]}
        onValueChange={handleSliderChange}
        className="my-4"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>0ml</span>
        <span>5L</span>
        <span>10L</span>
      </div>
      <div className="flex gap-2 mt-4">
        {PREDEFINED_AMOUNTS.map((amount) => (
          <button
            key={amount.value}
            type="button"
            onClick={() => setWaterAmount(Number(amount.value))}
            className="btn btn-outline flex-1 px-1 py-2"
          >
            {amount.icon}
            <span className="ml-1 text-xs">{amount.value}ml</span>
          </button>
        ))}
      </div>
    </div>
  )
}
