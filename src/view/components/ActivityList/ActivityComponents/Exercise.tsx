import { ExerciseRecordInfo } from '@/types/RecordInfo'
import { HeartIcon } from '@/view/components/Icons/Icons'

interface ExerciseProps {
  recordInfo: ExerciseRecordInfo
}

export function Exercise({ recordInfo }: ExerciseProps) {
  const { trainingDescription, duration, type } = recordInfo

  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-red-100 rounded-lg">
        <HeartIcon className="w-6 h-6 text-red-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">
          {type || 'Exercício'}
        </h3>
        <p className="whitespace-pre-wrap">{trainingDescription}</p>
        {duration && (
          <p className="text-sm text-gray-600 mt-1">
            Duração: {duration} minutos
          </p>
        )}
      </div>
    </div>
  )
}
