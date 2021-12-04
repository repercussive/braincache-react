import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  return (
    <button
      sx={{
        cursor: 'pointer',
        userSelect: 'none',
        height: '2.5rem',
        margin: 0,
        paddingX: '1rem',
        border: 'solid 2px',
        borderBottomWidth: '5px',
        borderRadius: 'default',
        borderColor: 'buttonBorder',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 450,
        lineHeight: '1rem',
        backgroundColor: 'buttonBackground',
        '&:hover, &:active': {
          borderColor: 'buttonBorderHighlight'
        },
        '&:active': {
          marginTop: '5px',
          height: 'calc(2.5rem - 5px)',
          borderBottomWidth: '2px'
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