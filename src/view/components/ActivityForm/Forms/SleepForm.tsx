import { SetStateAction, useEffect } from 'react'

type SleepFormProps = {
  sleepHour: string
  setSleepHour: React.Dispatch<SetStateAction<string>>
  wakeUpHour: string
  setWakeUpHour: React.Dispatch<SetStateAction<string>>
  sleepDuration: number
  setSleepDuration: React.Dispatch<SetStateAction<number>>
}

export function SleepForm(props: SleepFormProps) {
  const { sleepHour, setSleepHour, wakeUpHour, setWakeUpHour, sleepDuration, setSleepDuration } = props

  useEffect(() => {
    if (sleepHour && wakeUpHour) {
      const sleepTime = new Date(`1970-01-01T${sleepHour}:00`)
      const wakeTime = new Date(`1970-01-01T${wakeUpHour}:00`)
      let duration = (wakeTime.getTime() - sleepTime.getTime()) / (1000 * 60 * 60)
      if (duration < 0) {
        duration += 24
      }
      setSleepDuration(duration)
    }
  }, [sleepHour, wakeUpHour, setSleepDuration])

  return (
    <div className="form-control">
      <label className="label" htmlFor="sleepHour">
        <span className="label-text">Hora de Dormir</span>
      </label>
      <input
        id="sleepHour"
        name="sleepHour"
        type="time"
        required
        value={sleepHour}
        onChange={(e) => setSleepHour(e.target.value)}
        className="input input-bordered w-full"
      />
      <label className="label" htmlFor="wakeUpHour">
        <span className="label-text">Hora de Acordar</span>
      </label>
      <input
        id="wakeUpHour"
        name="wakeUpHour"
        type="time"
        required
        value={wakeUpHour}
        onChange={(e) => setWakeUpHour(e.target.value)}
        className="input input-bordered w-full"
      />
    </div>
  )
}
