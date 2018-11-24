const KoaRouter = require('koa-router');

const index = require('./routes/index');
const initiatives = require('./routes/initiatives');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/initiatives', initiatives.routes());

module.exports = router;
