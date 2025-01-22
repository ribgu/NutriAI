import { SleepRecordInfo } from '@/types/RecordInfo'
import { ZzzIcon } from '@/view/components/Icons/Icons'

interface SleepProps {
  recordInfo: SleepRecordInfo
}

export function Sleep({ recordInfo }: SleepProps) {
  const { sleepStart, sleepEnd, sleepHours } = recordInfo
  const startTime = new Date(sleepStart).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  const endTime = new Date(sleepEnd).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-indigo-100 rounded-lg">
        <ZzzIcon className="w-6 h-6 text-indigo-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">Sono</h3>
        <p className="space-y-1">
          <span className="block text-sm">
            De <span className="font-medium">{startTime}</span> até{' '}
            <span className="font-medium">{endTime}</span>
          </span>
          <span className="block text-sm text-gray-600">
            Duração: {sleepHours} horas
          </span>
        </p>
      </div>
    </div>
  )
}
