const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const config = require('./config');
const api = require('./api/api');

const app = new Koa();

//配置ctx.body解析中间件
app.use(bodyParser());

//配置路由中间件
app.use(api.routes()).use(api.allowedMethods());

app.listen(config.port);
console.log('app started at port ' + config.port + ' ...');