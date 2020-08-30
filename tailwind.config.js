module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: {
    mode: 'all',
    content: ['./build/*.html', './build/**/*.html']
  },
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    }
  }
}
