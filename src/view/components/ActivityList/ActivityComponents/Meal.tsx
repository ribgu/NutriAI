import { MealRecordInfo } from '@/types/RecordInfo'
import { KnifeIcon } from '@/view/components/Icons/Icons'

interface MealProps {
  recordInfo: MealRecordInfo
}

export function Meal({ recordInfo }: MealProps) {
  const { foodDescription } = recordInfo

  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-orange-100 rounded-lg">
        <KnifeIcon className="w-6 h-6 text-orange-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">Refeição</h3>
        <p className="whitespace-pre-wrap">{foodDescription}</p>
      </div>
    </div>
  )
}
