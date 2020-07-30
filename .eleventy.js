const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {
  config.addPlugin(pluginRss);

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

  config.addCollection("rss", collection => {
    return collection.getFilteredByTag('talk')
      .map(t => {
        return {
          data: {
            ...t.data,
            talk: {
              ...t.data.talk,
              abstract: t.data.talk.abstract.split('<br />').join(' ')
            },
            pubDate: t.data.date.toUTCString()
          },
        }
      })
      .sort((a, b) => {
        const A = a.data.date;
        const B = b.data.date;
        if(A < B) return 1
        else if (A > B) return -1;
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