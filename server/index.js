const Koa = require('koa');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const app = new Koa();
app.use(static(path.join(__dirname,'./static')))
app.use(bodyParser())
app.use(async ctx => {
  ctx.body ={
    age:24,
    name:'qcx'
  };
});

app.listen(3000);