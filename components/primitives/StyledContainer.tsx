import { FC } from 'react'
import { defaultPseudo } from '@/styles/util'

const StyledContainer: FC<{ color?: string, className?: string }> = ({ children, color, className }) => {
  return (
    <div
      sx={{
        position: 'relative',
        borderRadius: 'default',
        padding: '0.75em 1.25em',
        color,
        '&::before': {
          ...defaultPseudo,
          border: 'solid 2px',
          borderColor: color,
          borderRadius: 'inherit',
          opacity: 0.3
        },
        '&::after': {
          ...defaultPseudo,
          borderRadius: 'inherit',
          backgroundColor: color,
          opacity: 0.08
        }
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default StyledContainer