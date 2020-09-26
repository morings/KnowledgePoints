// server.js
const express = require('express')
const favicon = require('serve-favicon')
var bodyParser = require('body-parser')
const {login,register} = require("./login")
const app = express()
app.use(favicon('./public/logo-48.png'))
app.use('/public',express.static('./public'))
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/register',jsonParser,register);
app.post('/login',jsonParser,login);
app.listen(3000, () => console.log(`服务已启动`))