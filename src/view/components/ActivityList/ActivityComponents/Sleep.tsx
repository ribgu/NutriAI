import { SleepRecord } from '@/types/RecordType'

interface SleepProps {
  recordInfo: SleepRecord
}

export function Sleep({ recordInfo }: SleepProps) {
  const { sleepStart, sleepEnd, sleepHours } = recordInfo

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getSleepQuality = (hours: number) => {
    if (hours < 6) return { text: 'Insuficiente', color: 'text-error' }
    if (hours < 7) return { text: 'Regular', color: 'text-warning' }
    if (hours <= 9) return { text: 'Ótima', color: 'text-success' }
    
    return { text: 'Excessiva', color: 'text-warning' }
  }

  const hours = Number(sleepHours)
  const quality = getSleepQuality(hours)

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-primary">
        Noite de sono de {formatDate(sleepStart)}
      </h3>
      <div className="grid gap-3 pl-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Horário:</span>
          <span>{formatTime(sleepStart)} às {formatTime(sleepEnd)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Duração:</span>
          <span>{hours.toFixed(1)} horas</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Qualidade:</span>
          <span className={`${quality.color} font-medium`}>{quality.text}</span>
        </div>
      </div>
    </div>
  )
}
