const Koa = require('koa');
const app = new Koa();


//app.use(static(__dirname + '/static/html',{extensions:['html']}));

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
   console.log('hello world')
});


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');