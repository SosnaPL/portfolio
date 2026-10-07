export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        forest: 'rgb(var(--color-accent) / <alpha-value>)',
        lime: 'rgb(var(--color-accent) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        soft: 'rgb(var(--color-soft) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}