import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { GameContext } from 'components/screens/GameScreen'
import Flex from 'components/primitives/Flex'
import Icon from 'components/primitives/Icon'
import HeartIcon from 'components/icons/HeartIcon'

const Lives = observer(() => {
  const { lives } = useContext(GameContext)

  return (
    <Flex>
      {Array.from({ length: 3 }).map((_, index) => (
        <div sx={{ position: 'relative', fontSize: '1.2rem', mx: 3 }} key={index}>
          <Icon
            icon={HeartIcon}
            sx={{ zIndex: -1, position: 'absolute', color: 'lifeUsed' }}
          />
          <Icon
            icon={HeartIcon}
            sx={{
              position: 'relative', color: 'life',
              animation: index < lives ? 'none' : 'lose-life forwards 400ms'
            }}
          />
        </div>
      ))}
    </Flex>
  )
})

export default Lives