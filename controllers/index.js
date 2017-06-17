var fn_index = async (ctx, next) => {
	console.log(ctx.querystring);
	ctx.resonse.body = `<h1>Index ${ctx.querystring}</h1>`
};

var fn_hello = async (ctx, next) => {
	var name = ctx.params.name;
	ctx.resonse.type = 'text/html';
	ctx.resonse.body = `<h3> Hello ${name} </h1>`
};

module.exports = {
	'Get /': fn_index,
	'Get /hello/:name': fn_hello
};