/**
 * 整合所有子路由
 */

const router = require('koa-router');

const index = require('./index');

router.use('/', index.routes(), index.allowedMethods())

module.exports = router