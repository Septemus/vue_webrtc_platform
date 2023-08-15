const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })
module.exports = {
  outputDir:"docs", //设置打包后的项目目录名称
  lintOnSave: false,
  publicPath:'./'
}