import { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { GameContext } from 'components/screens/GameScreen'
import WordButton from 'components/screens/game/WordButton'
import sleep from '@/logic/util/sleep'
import Flex from 'components/modular/Flex'
import screenHandler from '@/logic/app/ScreenHandler'

const WordOptions = observer(() => {
  const game = useContext(GameContext)
  const { levelData, status, submitAnswer, generateLevel, checkHasGameEnded } = game
  const [buttonAnimation, setButtonAnimation] = useState<'enter' | 'exit'>('enter')
  const [lastSelectedWord, setLastSelectedWord] = useState('')

  return (
    <Flex center column sx={{ width: '100%', overflowX: 'hidden' }}>
      {Array.from({ length: 3 }).map((_, index) => {
        const word = index < levelData.options.length ? levelData.options[index] : null
        const variant = getButtonVariant(word)

        return (
          <WordButton
            sx={{ my: 4 }}
            onClick={word ? () => handleSubmitAnswer(word) : undefined}
            disabled={!word || status !== 'waiting'}
            key={index}
            data-animation={buttonAnimation}
            data-variant={variant}
          >
            {word}
          </WordButton>
        )
      })}
    </Flex>
  )

  async function handleSubmitAnswer(answer: string) {
    submitAnswer(answer)
    setLastSelectedWord(answer)
    await sleep(game.status === 'incorrect-answer' ? 1600 : 750)
    setButtonAnimation('exit')
    await sleep(400)
    
    if (checkHasGameEnded()) {
      screenHandler.setScreen('game-end')
    } else {
      generateLevel()
      setButtonAnimation('enter')
    }
  }

  function getButtonVariant(word: string | null) {
    if (!word) return undefined

    const isCorrectAnswer = () => game.levelData.correctOption === word

    if (game.status === 'correct-answer' && isCorrectAnswer()) {
      return 'correct'
    }

    if (game.status === 'incorrect-answer') {
      if (isCorrectAnswer()) {
        return 'missed'
      }
      if (word === lastSelectedWord) {
        return 'incorrect'
      }
    }
  }
})

export default WordOptions