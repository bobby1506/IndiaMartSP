const Router = require("koa-router");
const { tokenMiddleware } = require("../middlewares/tokenMiddleware");
const { validateAll } = require("../middlewares/validateAll");
const {
  userNameValidator,
  emailValidator,
} = require("../validators/authValidator");
const {
  mobileNumberValidator,
  addressValidator,
  productListValidator,
  shopAddressValidator,
  shopNameValidator,
  shippingDetailsValidator,
} = require("../validators/orderValidators");
const { createOrder } = require("../controllers/orderController");
const { userValidator } = require("../validators/userValidator");

const router = new Router();

router.post(
  "/createorder/:sellerId",
  tokenMiddleware,
  validateAll([
    userNameValidator,
    addressValidator,
    emailValidator,
    mobileNumberValidator,
    productListValidator,
    shopAddressValidator,
    shopNameValidator,
    shippingDetailsValidator,
    userValidator
  ]),
  createOrder
);

module.exports=router