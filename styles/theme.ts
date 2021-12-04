const theme = {
  colors: {
    accent: 'var(--accent-color)',
    textAccent: 'var(--text-color-accent)',
    info: 'var(--info-color)',
    buttonBorder: 'var(--button-border-color)',
    buttonBorderHighlight: 'var(--button-border-color-highlight)',
    buttonBackground: 'var(--button-background-color)',
    logoAccent: 'var(--logo-accent-color)',
    life: 'var(--life-color)',
    lifeUsed: 'var(--life-used-color)',
    correctWordBorder: 'var(--correct-word-border-color)',
    correctWordBackground: 'var(--correct-word-background-color)',
    incorrectWordBorder: 'var(--incorrect-word-border-color)',
    incorrectWordBackground: 'var(--incorrect-word-background-color)',
    missedWordBorder: 'var(--missed-word-border-color)',
    missedWordBackground: 'var(--missed-word-background-color)',
    emptyButtonBorder: 'var(--empty-button-border-color)'
  },
  radii: {
    default: '10px'
  },
  space: Array.from({ length: 30 }).map((_, i) => `${0.125 * i}rem`)
}

export default theme