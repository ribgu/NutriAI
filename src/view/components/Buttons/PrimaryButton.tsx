import { ButtonProps } from './ButtonProps'

export default function PrimaryButton({ children, className = '', onClick }: ButtonProps) {
  return (
    <button 
      className={`btn btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
