const router = require('koa-router')();

const miaoyu = require('./miaoyu');

router.use('/', miaoyu.routes(), miaoyu.allowedMethods());

module.exports = router;