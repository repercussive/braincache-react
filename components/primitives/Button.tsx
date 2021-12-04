import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  return (
    <button
      sx={{
        position: 'relative',
        top: 0,
        cursor: 'pointer',
        userSelect: 'none',
        height: '2.5rem',
        margin: 0,
        paddingX: '1rem',
        border: 'solid 2px',
        borderRadius: 'default',
        borderColor: 'buttonBorder',
        backgroundColor: 'buttonBackground',
        boxShadow: '0 3px 0 var(--button-border-color)',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 450,
        lineHeight: '1rem',
        transition: 'all 50ms',
        '&:hover, &:active': {
          borderColor: 'buttonBorderHighlight',
          boxShadow: '0 3px 0 var(--button-border-color-highlight)',
        },
        '&:active': {
          top: '3px',
          boxShadow: 'none'
        },
        '&:disabled': {
          pointerEvents: 'none',
          opacity: 0.5
        }
      }}
      ref={ref}
      {...props}
    >
      {props.children}
    </button>
  )
})

export default Button