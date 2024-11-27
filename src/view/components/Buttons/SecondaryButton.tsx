import { ButtonProps } from './ButtonProps'
    
export default function SecondaryButton({ children, className = '', onClick }: ButtonProps) {
    return (
      <button 
        className={`btn btn-outline btn-primary ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }