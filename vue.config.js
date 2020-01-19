// const webpack = require('webpack')

module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        // prependData: `@import "~@/variables.sass"`
      }
    }
  },
  configureWebpack: {

  }
}
