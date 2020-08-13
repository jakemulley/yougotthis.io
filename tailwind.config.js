module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],
  purge: [
    './build/*.html',
    './build/**/*.html'
  ],
}
