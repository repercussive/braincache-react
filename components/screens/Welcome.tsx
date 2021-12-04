import StyledContainer from 'components/primitives/StyledContainer'
import ViewportCentered from 'components/primitives/ViewportCentered'
import Button from 'components/primitives/Button'
import Flex from 'components/primitives/Flex'
import Spacer from 'components/primitives/Spacer'

const WelcomeScreen = () => {
  return (
    <ViewportCentered sx={{ top: [null, '40vh'] }}>
      <MainHeading />
      <Spacer mb={8} />
      <StyledContainer sx={{ textAlign: 'center' }} color="info">
        <p>How many words can you hold in your head?</p>
      </StyledContainer>
      <Spacer mb={8} />
      <HighScoreSection />
      <Spacer mb={8} />
      <Rules />
      <Spacer mb={8} />
      <Button>Start</Button>
    </ViewportCentered>
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
  return (
    <Flex center asSpan>
      Your best score:{' '}
      <span sx={{ ml: 5, px: 8, py: 5, bg: 'accent', borderRadius: 'default' }} >
        ??
      </span>
    </Flex>
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