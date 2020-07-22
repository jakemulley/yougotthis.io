const path = require('path')
const sass = require('node-sass-promise')
const CleanCSS = require('clean-css')

const inputFile = path.join(__dirname, 'scss/main.scss')
const outputFile = path.join(__dirname, 'style.css')

module.exports = class {
  data() {
    return {
      permalink: 'assets/style.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    const { css } = await sass.render({ file: inputFile })
    return new CleanCSS({}).minify(css.toString()).styles
  }
}