
module.exports = async (ctx) => {
  const title = 'index页面';
  
  await ctx.render('index', {
    title
  })
}