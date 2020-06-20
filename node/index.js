const static = require('koa-static');
const koa = require('koa');
const app = new koa();
const path = require("path")
// 配置静态web服务的中间件
app.use(static(path.join(__dirname,'static')));
app.use(async (ctx, next) => {
  if (ctx.request.path === '/getData') {
      ctx.set("Content-Type", "application/json")    
      ctx.body = JSON.stringify({
        name:'qcx',
        age:24
      })
  }
});
app.listen(3000,function(){
  console.log('启动成功');
})