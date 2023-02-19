const tailwindcss = require('tailwindcss');
const post_css = require('postcss-import');
const nesting = require('postcss-nesting');

const autoprefixer = require('autoprefixer');
const tailwindJS = require('./tailwind.config.js');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./app/**/*.js', './app/*.html', './app/**/**/**/*.js', './app/**/**/*.js'],
  css: ['./app/styles/index.css', './app/styles/tailwind.css'],
  whitelistPatterns: [/xs/, /sm/, /xsl/, /md/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
module.exports = {
  plugins: [post_css, nesting({ enable: false }), tailwindcss(tailwindJS), autoprefixer]
};
