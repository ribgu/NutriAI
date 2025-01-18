import { SetStateAction } from 'react'

type SleepFormProps = {
  sleepStart: string
  setSleepStart: React.Dispatch<SetStateAction<string>>
  sleepEnd: string
  setSleepEnd: React.Dispatch<SetStateAction<string>>
}

export function SleepForm(props: SleepFormProps) {
  const { sleepStart, setSleepStart, sleepEnd, setSleepEnd } = props

  return (
    <div className="form-control">
      <label className="label" htmlFor="sleepStart">
        <span className="label-text">Início do Sono</span>
      </label>
      <input
        id="sleepStart"
        name="sleepStart"
        type="datetime-local"
        required
        value={sleepStart}
        onChange={(e) => setSleepStart(e.target.value)}
        className="input input-bordered w-full"
      />
      <label className="label" htmlFor="sleepEnd">
        <span className="label-text">Fim do Sono</span>
      </label>
      <input
        id="sleepEnd"
        name="sleepEnd"
        type="datetime-local"
        required
        value={sleepEnd}
        onChange={(e) => setSleepEnd(e.target.value)}
        className="input input-bordered w-full"
      />
    </div>
  )
}
