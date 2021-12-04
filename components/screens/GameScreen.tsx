import { createContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import GameHandler from '@/logic/app/GameHandler'
import Score from 'components/screens/game/Score'
import Lives from 'components/screens/game/Lives'
import WordOptions from 'components/screens/game/WordOptions'
import StatusText from 'components/screens/game/StatusText'
import ViewportCentered from 'components/primitives/ViewportCentered'
import Spacer from 'components/primitives/Spacer'

export const GameContext = createContext<GameHandler>(null!)

const GameScreen = observer(() => {
  const [game] = useState(new GameHandler())

  return (
    <GameContext.Provider value={game}>
      <ViewportCentered>
        <Score />
        <Spacer mb={12} />
        <Lives />
        <Spacer mb={8} />
        <WordOptions />
        <Spacer mb={12} />
        <StatusText />
      </ViewportCentered>
    </GameContext.Provider>
  )
})

export default GameScreen