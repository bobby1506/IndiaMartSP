const Router = require("koa-router");
const { validateAll } = require("../middlewares/validateAll");
const {
  userNameValidator,
  emailValidator,
  passwordValidator,
  isUserExistValidator,
  sellerValidator,
} = require("../validators/authValidator");
const { registerUser, loginUser, getUser } = require("../controllers/authController");
const { tokenMiddleware } = require("../middlewares/tokenMiddleware");

const router = new Router();

router.post(
  "/register",
  validateAll([
    userNameValidator,
    emailValidator,
    passwordValidator,
    sellerValidator,
    isUserExistValidator,

  ]),registerUser

);

router.post(
  "/login",
  validateAll([
    emailValidator,
    passwordValidator,
  ]),loginUser
)

router.get("/getuser",tokenMiddleware,getUser)
module.exports=router