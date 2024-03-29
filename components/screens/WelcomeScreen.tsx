import screenHandler from '@/logic/app/ScreenHandler'
import highScoreHandler from '@/logic/app/HighScoreHandler'
import StyledContainer from 'components/modular/StyledContainer'
import ViewportCentered from 'components/modular/ViewportCentered'
import Button from 'components/modular/Button'
import Flex from 'components/modular/Flex'
import Spacer from 'components/modular/Spacer'
import FadeIn from 'components/modular/FadeIn'
import LabelledScore from 'components/modular/LabelledScore'

const WelcomeScreen = () => {
  const { setScreen } = screenHandler

  return (
    <FadeIn>
      <ViewportCentered>
        <MainHeading />
        <Spacer mb={8} />
        <StyledContainer sx={{ textAlign: 'center' }} color="info">
          <p>How many words can you hold in your head?</p>
        </StyledContainer>
        <Spacer mb={8} />
        <HighScoreSection />
        <Spacer mb={8} />
        <Rules />
        <Spacer mb={10} />
        <Button onClick={() => setScreen('game')}>Start</Button>
      </ViewportCentered>
    </FadeIn>
  )
}

const MainHeading = () => {
  return (
    <Flex center column>
      <span sx={{ fontWeight: 0, fontSize: '1.5rem', mb: 1 }}>🧠</span>
      <h1>
        <span>brain</span>
        <span sx={{ color: 'logoAccent' }}>cache</span>
      </h1>
    </Flex>
  )
}

const HighScoreSection = () => {
  const { highScore } = highScoreHandler

  return (
    <LabelledScore label="Your best score:" score={highScore} />
  )
}

const Rules = () => {
  return (
    <StyledContainer sx={{ maxWidth: '20.5em' }} color="textAccent">
      <ul sx={{ '& > li': { my: 4 } }}>
        <li>Words will appear on the screen.</li>
        <li>Select the one you haven't seen.</li>
        <li>Don't select any words that you've seen before, or you'll lose a life.</li>
        <li>Most people score somewhere between 50 and 200.</li>
      </ul>
    </StyledContainer>
  )
}

export default WelcomeScreen