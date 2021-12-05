import { observer } from 'mobx-react-lite'
import screenHandler, { AppScreen } from '@/logic/app/ScreenHandler'
import WelcomeScreen from 'components/screens/WelcomeScreen'
import GameScreen from 'components/screens/GameScreen'
import EndScreen from 'components/screens/EndScreen'

const screenMap: Record<AppScreen, JSX.Element> = {
  'welcome': <WelcomeScreen />,
  'game': <GameScreen />,
  'game-end': <EndScreen />
}

const MainPage = observer(() => {
  const { screen } = screenHandler
  return screenMap[screen]
})

export default MainPage
