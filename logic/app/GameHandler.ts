import allWords from '@/assets/words'
import getRandomArrayItem from '@/logic/util/getRandomArrayItem'
import shuffleArray from '@/logic/util/shuffleArray'

class GameHandler {
  public score = 0
  public lives = 3
  private unseenWords = allWords
  private seenWords: string[] = []

  public generateLevel = () => {
    const correctOption = getRandomArrayItem(this.unseenWords)
    const incorrectOptions = this.pickRandomSeenWords()
    const options = [correctOption, ...incorrectOptions]
    shuffleArray(options)

    return {
      options,
      correctOption
    }
  }

  public submitAnswer = (answer: string) => {
    const isCorrect = !this.seenWords.includes(answer)
    this.seenWords.push(answer)

    if (isCorrect) {
      this.handleCorrectAnswer()
    } else {
      this.handleIncorrectAnswer()
    }
  }

  private pickRandomSeenWords = () => {
    shuffleArray(this.seenWords)
    return this.seenWords.slice(0, Math.max(this.seenWords.length, 2))
  }

  private handleCorrectAnswer = () => {
    this.score += 1
  }

  private handleIncorrectAnswer = () => {
    this.lives -= 1
    if (this.lives < 1) {
      this.handleGameEnd()
    }
  }

  private handleGameEnd = () => {
    // todo: some stuff
  }
}

export default GameHandler