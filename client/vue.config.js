
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { 
          "^/api": ''
        }
      }
    }
  },
  chainWebpack: (config)=>{
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@components', resolve('src/components'))
  }
}