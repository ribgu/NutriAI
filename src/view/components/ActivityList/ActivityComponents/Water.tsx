import { WaterRecordInfo } from '@/types/RecordInfo'
import { WaterIcon } from '../../Icons/Icons'

interface WaterProps {
  recordInfo: WaterRecordInfo
}

export function Water({ recordInfo }: WaterProps) {
  const { waterAmount } = recordInfo

  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <WaterIcon className="w-6 h-6 text-blue-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">Registro de água</h3>
        <p>
          Consumo de{' '}
          <span className="font-medium">
            {waterAmount >= 1000 ? `${waterAmount / 1000}L` : `${waterAmount}ml`}
          </span>
        </p>
      </div>
    </div>
  )
}
