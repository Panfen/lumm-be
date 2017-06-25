/**
 * 主页子路由
 */

const router = require('koa-router')();
const index = require('../controllers/index'); 

const routes = router
	.get('/index', function(){
		console.log('hhahhah')
	})

module.exports = routes