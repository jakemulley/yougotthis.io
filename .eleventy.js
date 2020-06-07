module.exports = function(config) {
  config.addPassthroughCopy('src/assets')
  config.addPassthroughCopy('src/_redirects')

  config.addCollection("talks", collection => {
    return collection.getFilteredByTag('talk').sort((a, b) => {
      const A = a.data.talk.title;
      const B = b.data.talk.title;
      if(A > B) return 1
      else if (A < B) return -1;
      else return 0;
    });
  })

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