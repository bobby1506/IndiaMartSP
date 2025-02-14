const Router=require('koa-router');
const { tokenMiddleware } = require('../middlewares/tokenMiddleware');
const { validateAll } = require('../middlewares/validateAll');
const {userValidator } = require('../validators/userValidator');
const { sellerList } = require('../controllers/sellerController');

const router=new Router();

router.get('/getsellers',tokenMiddleware,validateAll([userValidator]),sellerList)

module.exports=router;