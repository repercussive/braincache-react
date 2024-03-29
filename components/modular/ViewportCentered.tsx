import { FC } from 'react'
import Flex from 'components/modular/Flex'

const ViewportCentered: FC<{ className?: string }> = ({ className, children }) => {
  return (
    <div
      sx={{
        position: 'absolute',
        top: ['50%', '40vh'],
        right: 8,
        left: 8,
        transform: 'translateY(-50%)'
      }}
      className={className}
    >
      <Flex center column>
        {children}
      </Flex>
    </div>
  )
}

export default ViewportCentered