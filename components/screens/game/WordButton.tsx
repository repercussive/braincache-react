import { FC } from 'react'
import Button, { ButtonProps } from 'components/modular/Button'
import theme from '@/styles/theme'
import { defaultPseudo } from '@/styles/util'

type WordButtonProps = {
  'data-animation': 'enter' | 'exit',
  'data-variant'?: 'correct' | 'incorrect' | 'missed'
}

const variantMap = {
  correct: {
    border: theme.colors.wordCorrectBorder,
    background: theme.colors.wordCorrectBg
  },
  incorrect: {
    border: theme.colors.wordIncorrectBorder,
    background: theme.colors.wordIncorrectBg
  },
  missed: {
    border: theme.colors.wordMissedBorder,
    background: theme.colors.wordMissedBg
  }
}

const WordButton: FC<ButtonProps & WordButtonProps> = (props) => {
  const variant = props['data-variant']
  const variantStyles = variant ? variantMap[variant] : undefined

  return (
    <Button
      sx={{
        minWidth: '5rem',
        '&[data-animation="enter"]': {
          animation: 'enter forwards 400ms'
        },
        '&[data-animation="exit"]': {
          animation: 'exit forwards 400ms !important'
        },
        '&[data-variant="incorrect"]': {
          animation: 'shakeX forwards 500ms'
        },
        '&[data-variant="correct"]': {
          '@keyframes wipe': {
            '0%': { right: '100%', opacity: 0, backgroundColor: 'white' },
            '10%': { opacity: 0 },
            '20%': { opacity: 0.75 },
            '100%': { right: '2px', opacity: 1, backgroundColor: 'wordCorrectBg' }
          },
          '@keyframes turn-green': {
            '0%': { backgroundColor: 'buttonBg' },
            '100%': { backgroundColor: 'wordCorrectBg' }
          },
          '.front': {
            position: 'relative',
            animation: 'turn-green forwards 450ms ease-in',
            '&::after': {
              ...defaultPseudo,
              inset: '2px',
              borderRadius: `calc(${theme.radii.default} - 3px)`,
              animation: 'wipe forwards 450ms',
            }
          }
        },
        '--border-color': props.children ? variantStyles?.border : theme.colors.buttonBorderEmpty,
        '--background-color': variantStyles?.background
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default WordButton