import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { GameContext } from 'components/screens/GameScreen'
import { GameStatus } from '@/logic/app/GameHandler'
import StyledContainer from 'components/primitives/StyledContainer'
import Flex from 'components/primitives/Flex'

const textMap: Record<GameStatus, string> = {
  'waiting': 'Select the new word',
  'correct-answer': 'Nice!',
  'incorrect-answer': `You've seen that before.`,
  'ended': '(none)'
}

const StatusText = observer(() => {
  const { status } = useContext(GameContext)

  return (
    <StyledContainer color="info" sx={{ width: '15rem' }}>
      <Flex center asSpan>
        {textMap[status]}
      </Flex>
    </StyledContainer>
  )
})

export default StatusText