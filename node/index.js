const Koa = require('koa');
const KoaStatic = require('koa-static');
const app = new Koa()
app.use(KoaStatic('./static'));//必须放在前面，放在后面就是前面的中间件先起作用了
app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.listen(3000)

