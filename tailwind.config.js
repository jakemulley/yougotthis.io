module.exports = {
  purge: {
    content: [
      './src/**/*.liquid',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
