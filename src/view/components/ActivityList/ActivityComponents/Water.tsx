import { WaterRecordInfo } from '@/types/RecordInfo'
import { GlassWater } from 'lucide-react'

type WaterProps = {
  recordInfo: WaterRecordInfo
}

export function Water({ recordInfo }: WaterProps) {
  const consumptionDate = recordInfo.waterDateHour 
    ? new Date(recordInfo.waterDateHour).toLocaleString()
    : 'Horário não registrado'

  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-blue-100 p-3">
        <GlassWater className="h-6 w-6 text-blue-500" />
      </div>
      <div>
        <h3 className="font-medium">Consumo de Água</h3>
        <p className="text-sm text-gray-600">{recordInfo.waterAmount}ml</p>
        <p className="text-xs text-gray-500">Consumido em: {consumptionDate}</p>
      </div>
    </div>
  )
}
