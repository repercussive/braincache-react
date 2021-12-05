const isBrowser = typeof window !== 'undefined'

const highScoreHandler = new class {
  public highScore: number
  public mostRecentScore = 0

  constructor() {
    if (isBrowser) {
      this.highScore = parseInt(localStorage.getItem('highScore') ?? '0') || 0
    } else {
      this.highScore = 0
    }
  }

  public setMostRecentScore = (score: number) => {
    this.mostRecentScore = score
    if (score > this.highScore) {
      this.highScore = score
      if (isBrowser) {
        localStorage.setItem('highScore', score.toString())
      }
    }
  }
}

export default highScoreHandler