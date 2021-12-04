import { observer } from 'mobx-react-lite'
import screenHandler from '@/logic/app/ScreenHandler'
import WelcomeScreen from 'components/screens/WelcomeScreen'
import GameScreen from 'components/screens/GameScreen'

const MainPage = observer(() => {
  const { screen } = screenHandler

  switch (screen) {
    case 'welcome': return <WelcomeScreen />
    case 'game': return <GameScreen />
    case 'game-end': return <div>not implemented</div>
  }
})

export default MainPage
