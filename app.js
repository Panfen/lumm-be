const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');
const app = new Koa();
const api = require('./server/routes/api.js');

// 解析multipart/form-data类型
// app.use(multer);

// 解析Josn,form,text类型
app.use(bodyParser({
	onerror: function (err, ctx) {
    ctx.throw('body parse error', 422);
  }
}));

router.post('/uploadPic', async(ctx, next) => {
	console.log(ctx.request.body)
	ctx.body = {
    code:'0',
    description: 'ok',
    result: ctx.request.body
  }
});

router.use('/api', api.routes());

app.use(router.routes());

app.listen(3000);
console.log('Server started at 3000...')