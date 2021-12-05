import { FC } from 'react'
import Button, { ButtonProps } from 'components/primitives/Button'
import theme from '@/styles/theme'
import { defaultPseudo } from '@/styles/util'

type WordButtonProps = {
  'data-animation': 'enter' | 'exit',
  'data-variant'?: 'correct' | 'incorrect' | 'missed'
}

const variantMap = {
  correct: {
    border: theme.colors.correctWordBorder,
    background: theme.colors.correctWordBackground
  },
  incorrect: {
    border: theme.colors.incorrectWordBorder,
    background: theme.colors.incorrectWordBackground
  },
  missed: {
    border: theme.colors.missedWordBorder,
    background: theme.colors.missedWordBackground
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
            '100%': { right: '2px', opacity: 1, backgroundColor: 'correctWordBackground' }
          },
          '@keyframes turn-green': {
            '0%': { backgroundColor: 'buttonBackground' },
            '100%': { backgroundColor: 'correctWordBackground' }
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
        '--border-color': props.children ? variantStyles?.border : theme.colors.emptyButtonBorder,
        '--background-color': variantStyles?.background
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default WordButton