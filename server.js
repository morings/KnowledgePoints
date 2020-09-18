// server.js
const fs = require('fs')
const express = require('express')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync('./index.html', 'utf-8');
const renderer = require('vue-server-renderer').createBundleRenderer(bundle,{
  runInNewContext: false, // 推荐
  template: template
})
const server = express()
server.get('*', (req, res) => {
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
server.listen(3000, () => console.log(`服务已启动`))