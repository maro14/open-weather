import { ClipLoader } from 'react-spinners'

interface LoadingSpinnerProps {
  color?: string;
  size?: number;
}

export function LoadingSpinner({ 
  color = '#646cff',
  size = 40 
}: LoadingSpinnerProps) {
  return (
    <div className="loading-spinner">
      <ClipLoader
        color={color}
        size={size}
        aria-label="Loading..."
      />
    </div>
  )
} 