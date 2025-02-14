const Router = require("koa-router");
const { tokenMiddleware } = require("../middlewares/tokenMiddleware");
const { validateAll } = require("../middlewares/validateAll");
const {
  userNameValidator,
  emailValidator,
  sellerValidator,
} = require("../validators/authValidator");
const {
  mobileNumberValidator,
  addressValidator,
  productListValidator,
  shopAddressValidator,
  shopNameValidator,
  shippingDetailsValidator,
} = require("../validators/orderValidators");
const { createOrder, userOrders, approveOrder } = require("../controllers/orderController");
const { userValidator, sellersValidator } = require("../validators/userValidator");
const { sellerOrders } = require("../controllers/orderController");


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
    userValidator,
  ]),
  createOrder
);

router.get("/getsellerorders", tokenMiddleware, sellerOrders);
router.get("/getuserorders", tokenMiddleware, validateAll([userValidator]), userOrders);    
router.post("/approveorder/:orderId", tokenMiddleware, validateAll([sellersValidator]), approveOrder);
module.exports = router;
