module.exports = {
  outputDir: "../client",
  productionSourceMap: false
};

module.exports = {
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DarkSoulsClickerGame/'
    : '/'
};