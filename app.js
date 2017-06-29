const path = require('path');
const Koa = require('koa');
const render = require('koa-ejs');
const convert = require('koa-convert');
const views = require('koa-views');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');

const config = require('./config');
const routes = require('./routes/routes');

const app = new Koa();


//配置ctx.body解析中间件
app.use(bodyParser());

//配置静态资源加载中间件
app.use(convert(koaStatic(
	path.join(__dirname, './static')
)));

//配置服务端模板渲染引擎中间件
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

//配置路由中间件
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(config.port);
console.log('app started at port '+ config.port +'...');