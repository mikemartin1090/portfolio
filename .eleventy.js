module.exports = (eleventyConfig) => {

  // add CSS https://michaelsoolee.com/add-css-11ty/
  eleventyConfig.addPassthroughCopy('css');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: 'layouts',
      data: 'data',
    },
    templateFormats: ['css', 'njk', 'md', 'html'],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};