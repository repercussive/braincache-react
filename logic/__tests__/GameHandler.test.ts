import GameHandler from '@/logic/app/GameHandler'

let game: GameHandler

function getIncorrectAnswer({ options, correctOption }: { options: string[], correctOption: string }) {
  return options.filter((option) => option !== correctOption)[0]
}

beforeEach(() => {
  game = new GameHandler()
})

describe('initial state', () => {
  test('game starts with 3 lives', () => {
    expect(game.lives).toEqual(3)
  })
})

describe('generateLevel()', () => {
  test('on the first level, it returns one new word as the correct option', () => {
    const { options, correctOption } = game.generateLevel()
    expect(options).toEqual([correctOption])
  })

  test('the second time a level is generated, it returns two options: one new word and one already-seen word', () => {
    const { correctOption: levelOneCorrectOption } = game.generateLevel()
    game.submitAnswer(levelOneCorrectOption)

    let { options, correctOption } = game.generateLevel()
    const expectedOptions = [correctOption, levelOneCorrectOption].sort()
    options = options.sort()

    expect(options).toEqual(expectedOptions)
  })

  test('from the third level, it returns three options: one new word and two already-seen words', () => {
    const { correctOption: levelOneCorrectOption } = game.generateLevel()
    game.submitAnswer(levelOneCorrectOption)

    const { correctOption: levelTwoCorrectOption } = game.generateLevel()
    game.submitAnswer(levelTwoCorrectOption)

    let { options, correctOption } = game.generateLevel()
    const expectedOptions = [correctOption, levelOneCorrectOption, levelTwoCorrectOption].sort()
    options = options.sort()

    expect(options).toEqual(expectedOptions)

    expect(game.generateLevel().options.length).toEqual(3)
  })
})

describe('submitAnswer()', () => {
  test('when a level is answered correctly, the score increases by 1', () => {
    for (let i = 0; i < 5; i++) {
      const { correctOption } = game.generateLevel()
      game.submitAnswer(correctOption)
    }

    expect(game.score).toEqual(5)
  })

  test('when a level is answered incorrectly, the score does not change', () => {
    // the first level cannot be answered incorrectly
    game.submitAnswer(game.generateLevel().correctOption)

    const incorrectAnswer = getIncorrectAnswer(game.generateLevel())
    game.submitAnswer(incorrectAnswer)

    expect(game.score).toEqual(1)
  })

  test('the lives count decreases by 1 only when a level is answered incorrectly', () => {
    game.submitAnswer(game.generateLevel().correctOption)
    expect(game.lives).toEqual(3)

    game.submitAnswer(getIncorrectAnswer(game.generateLevel()))
    game.submitAnswer(getIncorrectAnswer(game.generateLevel()))
    expect(game.lives).toEqual(1)
  })
})