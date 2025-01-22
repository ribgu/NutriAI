import { SleepRecordInfo } from '@/types/RecordInfo'

interface SleepProps {
  recordInfo: SleepRecordInfo
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
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">
        Noite de sono de {formatDate(sleepStart)}
      </h3>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm opacity-75">Horário:</span>
          <span>{formatTime(sleepStart)} às {formatTime(sleepEnd)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm opacity-75">Duração:</span>
          <span>{hours.toFixed(1)} horas</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm opacity-75">Qualidade:</span>
          <span className={quality.color}>{quality.text}</span>
        </div>
      </div>
    </div>
  )
}
