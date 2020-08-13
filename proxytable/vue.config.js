
module.exports = {
  devServer: {
      // 设置主机地址
      host: 'localhost',
      // 设置默认端口
      port: 8080,
      // 设置代理
      proxy: {
          '/': {
              // 目标 API 地址
              target: 'http://localhost:3000/',
              pathRewrite: {'^/': ''}
          }
      }
  }
}
