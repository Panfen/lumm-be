var Koa = require('koa');
var app = new Koa();
var config = require('./config/default.js');

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(config.port);
console.log('Listen at ' + config.port + ' ...');