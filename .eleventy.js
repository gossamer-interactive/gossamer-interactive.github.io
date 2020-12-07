const pluginSEO = require("eleventy-plugin-seo");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));

  return {
    dir: {
      input: "src",
      output: "_output",
    },
  };
};
