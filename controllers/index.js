module.exports = async (ctx) => {
	console.log('hello')
  const title = 'index页面';
  ctx.body = title
  /*
  await ctx.render('index', {
    title
  })*/
}