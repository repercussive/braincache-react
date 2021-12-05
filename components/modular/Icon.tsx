import { VFC } from 'react'

interface Props {
  icon: () => JSX.Element,
  className?: string
}

const Icon: VFC<Props> = (props) => {
  const IconComponent = props.icon

  return (
    <div
      sx={{
        display: 'inline-flex',
        transform: 'scale(1.35)'
      }}
      className={props.className}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none">
        <IconComponent />
      </svg>
    </div>
  )
}

export default Icon