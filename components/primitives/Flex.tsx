import { forwardRef, PropsWithChildren } from 'react'

interface FlexProps {
  className?: string,
  center?: boolean,
  column?: boolean,
  flexWrap?: boolean,
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline',
  asSpan?: boolean
}

const Flex = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>(function Flex(props, ref) {
  const { center, column, flexWrap, justify, align, asSpan } = props
  const Element = asSpan ? 'span' : 'div'

  return (
    <Element
      sx={{
        display: 'flex',
        flexDirection: column ? 'column' : undefined,
        flexWrap: flexWrap ? 'wrap' : undefined,
        justifyContent: justify ?? (center ? 'center' : undefined),
        alignItems: align ?? (center ? 'center' : undefined)
      }}
      ref={ref}
      className={props.className}
    >
      {props.children}
    </Element>
  )
})

export default Flex