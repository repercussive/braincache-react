const theme = {
  colors: {
    accent: 'var(--accent-color)',
    textAccent: 'var(--text-color-accent)',
    info: 'var(--info-color)',
    buttonBorder: 'var(--button-border-color)',
    buttonBorderHighlight: 'var(--button-border-color-highlight)',
    buttonBackground: 'var(--button-background-color)',
    logoAccent: 'var(--logo-accent-color)'
  },
  radii: {
    default: '10px'
  },
  space: Array.from({ length: 30 }).map((_, i) => `${0.125 * i}rem`)
}

export default theme