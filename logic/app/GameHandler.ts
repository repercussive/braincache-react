import { makeAutoObservable } from 'mobx'
import allWords from '@/assets/words'
import highScoreHandler from '@/logic/app/HighScoreHandler'
import getRandomArrayItem from '@/logic/util/getRandomArrayItem'
import shuffleArray from '@/logic/util/shuffleArray'

export type GameStatus = 'waiting' | 'correct-answer' | 'incorrect-answer' | 'ended'

type LevelData = {
  options: string[]
  correctOption: string
}

class GameHandler {
  public score = 0
  public lives = 3
  public levelData: LevelData
  public status: GameStatus = 'waiting'
  private unseenWords = allWords
  private seenWords: string[] = []

  constructor() {
    this.levelData = this.generateLevel()
    makeAutoObservable(this)
  }

  public generateLevel = () => {
    this.status = 'waiting'
    const correctOption = this.pickRandomUnseenWord()
    const incorrectOptions = this.pickRandomSeenWords()
    const options = [correctOption, ...incorrectOptions]
    shuffleArray(options)

    return this.levelData = {
      options,
      correctOption
    }
  }

  public submitAnswer = (answer: string) => {
    const correctAnswer = this.levelData.correctOption
    const isCorrect = answer === correctAnswer
    if (!this.seenWords.includes(correctAnswer)) {
      this.seenWords.push(correctAnswer)
    }

    if (isCorrect) {
      this.handleCorrectAnswer()
    } else {
      this.handleIncorrectAnswer()
    }
  }

  public checkHasGameEnded = () => {
    if (this.lives === 0 || this.unseenWords.length === 0) {
      this.handleGameEnd()
      return true
    }
    return false
  }

  private pickRandomUnseenWord = () => {
    const newWord = getRandomArrayItem(this.unseenWords)
    this.unseenWords = this.unseenWords.filter((word) => word !== newWord)
    return newWord
  }

  private pickRandomSeenWords = () => {
    shuffleArray(this.seenWords)
    return this.seenWords.slice(0, Math.min(this.seenWords.length, 2))
  }

  private handleCorrectAnswer = () => {
    this.status = 'correct-answer'
    this.score += 1
  }

  private handleIncorrectAnswer = () => {
    this.status = 'incorrect-answer'
    this.lives -= 1
  }

  private handleGameEnd = () => {
    this.status = 'ended'
    highScoreHandler.setMostRecentScore(this.score)
  }
}

export default GameHandler