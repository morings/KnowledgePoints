// server.js
const fs = require('fs')
const path = require('path')
const express = require('express')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const favicon = require('serve-favicon')
const template = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const resolve = file => path.resolve(__dirname, file)
const isProd = process.env.NODE_ENV === 'production'
const renderer = require('vue-server-renderer').createBundleRenderer(bundle,{
  runInNewContext: false, // 推荐
  template: template,
  clientManifest,
  basedir: resolve('./dist'),
})
const app = express()
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})
app.use('/dist', serve('./dist', true))
app.use(favicon('./public/logo-48.png'))
app.use('/public', serve('./public', true))
app.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err)
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
  
})
app.listen(3000, () => console.log(`服务已启动`))