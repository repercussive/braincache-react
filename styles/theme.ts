const theme = {
  colors: {
    accent: 'var(--color-accent)',
    textAccent: 'var(--color-text-accent)',
    buttonBorder: 'var(--color-button-border)',
    buttonBorderHighlight: 'var(--color-button-border-highlight)',
    buttonBorderEmpty: 'var(--color-button-border-empty)',
    buttonBg: 'var(--color-button-bg)',
    info: 'var(--color-info)',
    logoAccent: 'var(--color-logo-accent)',
    life: 'var(--color-life)',
    lifeUsed: 'var(--color-life-used)',
    wordCorrectBorder: 'var(--color-word-correct-border)',
    wordCorrectBg: 'var(--color-word-correct-bg)',
    wordIncorrectBorder: 'var(--color-word-incorrect-border)',
    wordIncorrectBg: 'var(--color-word-incorrect-bg)',
    wordMissedBorder: 'var(--color-word-missed-border)',
    wordMissedBg: 'var(--color-word-missed-bg)',
  },
  radii: {
    default: '10px'
  },
  space: Array.from({ length: 30 }).map((_, i) => `${0.125 * i}rem`)
}

export default theme