import highScoreHandler from '@/logic/app/HighScoreHandler'
import screenHandler from '@/logic/app/ScreenHandler'
import Button from 'components/primitives/Button'
import FadeIn from 'components/primitives/FadeIn'
import Flex from 'components/primitives/Flex'
import ScoreDisplay from 'components/primitives/ScoreDisplay'
import Spacer from 'components/primitives/Spacer'
import StyledContainer from 'components/primitives/StyledContainer'
import ViewportCentered from 'components/primitives/ViewportCentered'

const EndScreen = () => {
  const { setScreen } = screenHandler

  return (
    <FadeIn>
      <ViewportCentered>
        <span sx={{ fontWeight: 0, fontSize: '1.5rem' }}>👏</span>
        <Spacer mb={8} />
        <StyledContainer color="textAccent">
          <p>That's a wrap!</p>
        </StyledContainer>
        <Spacer mb={12} />
        <ScoreSection />
        <Spacer mb={14} />
        <Button onClick={() => setScreen('game')}>Play again</Button>
        <Spacer mb={8} />
        <Button onClick={() => setScreen('welcome')}>Home</Button>
      </ViewportCentered>
    </FadeIn>
  )
}

const ScoreSection = () => {
  const { mostRecentScore, highScore } = highScoreHandler

  const isHighScore = mostRecentScore >= highScore

  return (
    <Flex center asSpan>
      {isHighScore ? 'High score!' : 'Your score:'}{' '}
      <ScoreDisplay score={mostRecentScore} />
    </Flex>
  )
}

export default EndScreen