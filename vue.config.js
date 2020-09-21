module.exports = {
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bloggr/'
    : '/'
};

module.exports = {
  outputDir: "../client",
  productionSourceMap: false
};