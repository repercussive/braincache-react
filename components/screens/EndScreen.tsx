import highScoreHandler from '@/logic/app/HighScoreHandler'
import screenHandler from '@/logic/app/ScreenHandler'
import Button from 'components/modular/Button'
import FadeIn from 'components/modular/FadeIn'
import Flex from 'components/modular/Flex'
import ScoreDisplay from 'components/modular/ScoreDisplay'
import Spacer from 'components/modular/Spacer'
import StyledContainer from 'components/modular/StyledContainer'
import ViewportCentered from 'components/modular/ViewportCentered'

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