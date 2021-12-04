import { FC } from 'react'
import Button, { ButtonProps } from 'components/primitives/Button'
import theme from '@/styles/theme'

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