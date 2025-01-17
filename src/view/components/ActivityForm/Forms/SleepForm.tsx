import { SetStateAction } from 'react'

type SleepFormProps = {
  sleepHour: string
  setSleepHour: React.Dispatch<SetStateAction<string>>
  wakeUpHour: string
  setWakeUpHour: React.Dispatch<SetStateAction<string>>
}

export function SleepForm(props: SleepFormProps) {
  const { sleepHour, setSleepHour, wakeUpHour, setWakeUpHour } = props

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
