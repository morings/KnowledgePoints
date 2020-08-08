const Koa = require('koa');
const KoaStatic = require('koa-static');
const app = new Koa();
app.use(KoaStatic('./'));

app.use(async ctx => {
  ctx.type = 'application/json ';
  ctx.body = JSON.stringify({name:'qcx'})
});

app.listen(3000);