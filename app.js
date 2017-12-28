const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();


app.use(bodyParser({
	onerror: function (err, ctx) {
    ctx.throw('body parse error', 422);
  }
}));

router.post('/uploadPic', async(ctx, next) => {
	console.log(ctx.request.body)
	ctx.response.body = {
    code:'0',
    description: 'ok',
    result: ctx.request.body
  }
});

app.use(router.routes());

app.listen(3000);
console.log('Server started at 3000...')