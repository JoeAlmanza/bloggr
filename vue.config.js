module.exports = {
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bloggrrr/'
    : '/'
};

module.exports = {
  outputDir: "../client",
  productionSourceMap: false
};