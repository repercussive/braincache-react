import { makeAutoObservable } from 'mobx'

export type AppScreen = 'welcome' | 'game' | 'game-end'

const screenHandler = new class {
  public screen: AppScreen = 'welcome'

  constructor() {
    makeAutoObservable(this)
  }

  public setScreen = (screen: AppScreen) => {
    this.screen = screen
  }
}

export default screenHandler