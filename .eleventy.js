module.exports = function(config) {
  config.addPassthroughCopy('src/assets')
  config.addPassthroughCopy('src/_redirects')

  return {
    dir: {
      input: './src',
      output: './build',
      includes: '_includes',
      layouts: '_layouts'
    },
    passthroughFileCopy: true
  }
}