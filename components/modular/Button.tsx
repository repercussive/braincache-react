import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'
import Flex from 'components/modular/Flex'
import theme from '@/styles/theme'

export type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  return (
    <button
      sx={{
        '--border-color': theme.colors.buttonBorder,
        '--background-color': theme.colors.buttonBackground,
        cursor: 'pointer',
        userSelect: 'none',
        padding: 0,
        margin: 0,
        border: 'none',
        borderRadius: 'default',
        backgroundColor: 'var(--border-color)',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 450,
        lineHeight: '1rem',
        transition: 'all 50ms',
        '.front': {
          zIndex: 1,
          height: '2.5rem',
          paddingX: '1em',
          marginTop: '-2px',
          borderRadius: 'default',
          border: 'solid 2px',
          borderColor: 'var(--border-color)',
          backgroundColor: 'var(--background-color)',
          transform: 'translateY(-3px)',
          transition: 'all 70ms'
        },
        '&:hover, &:active': {
          '&:not(:disabled)': {
            '@media (hover: hover)': {
              '--border-color': theme.colors.buttonBorderHighlight
            }
          }
        },
        '&:active': {
          top: '3px',
          boxShadow: 'none',
          '.front': {
            transform: 'translateY(0)'
          }
        },
        '&:disabled': {
          pointerEvents: 'none'
        }
      }}
      ref={ref}
      {...props}
    >
      <Flex center asSpan className="front">
        {props.children}
      </Flex>
    </button>
  )
})

export default Button