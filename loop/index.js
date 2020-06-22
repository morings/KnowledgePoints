const static = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path')
app.use(static(path.join(__dirname,'./static')))
app.use(async ctx => {
  if(ctx.request.path=='/getTime'){
    ctx.response.body = ctx.request.query;
  }
});
app.listen(3000,()=>{
  console.log('服务开启了')
})