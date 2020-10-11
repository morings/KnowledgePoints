// server.js
const express = require('express')
var path = require("path")
const favicon = require('serve-favicon')
var bodyParser = require('body-parser')
const {login,register} = require("./login")
const {upload} = require("./upload")
const {getUserInfo} = require("./api.js")
const app = express()
app.use(favicon(path.join(__dirname,'./public/logo-48.png')))
app.use('/public',express.static(path.join(__dirname,'./public')))
app.use('/files',express.static(path.join(__dirname,'./upload')))
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/register',jsonParser,register);
app.post('/login',jsonParser,login);
app.post('/upload',upload);
app.post('/getUserInfo',jsonParser,getUserInfo)
app.listen(3000, () => console.log(`服务已启动`))