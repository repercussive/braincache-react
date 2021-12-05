import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { GameContext } from 'components/screens/GameScreen'
import Flex from 'components/modular/Flex'
import sleep from '@/logic/util/sleep'

const enterAnimation = 'enter forwards 400ms'
const exitAnimation = 'exit forwards 400ms'

const Score = observer(() => {
  const { score, status } = useContext(GameContext)
  const [animation, setAnimation] = useState(enterAnimation)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedScore, setDisplayedScore] = useState(0)

  if (status === 'correct-answer' && !isAnimating) {
    setIsAnimating(true)
    sleep(750)
      .then(() => setAnimation(exitAnimation))
      .then(() => sleep(400))
      .then(() => {
        setDisplayedScore(score)
        setAnimation(enterAnimation)
      })
  } else if (status !== 'correct-answer' && isAnimating) { 
    setIsAnimating(false)
  }

  return (
    <Flex center column>
      <span sx={{ mb: 4 }}>Score</span>
      <Flex
        sx={{
          px: 8, py: 4,
          bg: 'accent', borderRadius: 'default', overflowX: 'hidden',
        }}
      >
        <Flex center asSpan sx={{ minWidth: '3.1ch', animation }}>
          {displayedScore}
        </Flex>
      </Flex>
    </Flex>
  )
})

export default Score