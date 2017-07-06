const router = require('koa-router')();

const miaoyuCtrl = require('../controllers/miaoyuCtrl');

const routers = router
	.get('/', miaoyuCtrl.getData);

module.exports = routers;