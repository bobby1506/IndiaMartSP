const jwt = require("jsonwebtoken");
const { resHandler } = require("../shared/resHandler");

const tokenMiddleware = async (ctx, next) => {
  try {
    let token = ctx.request.headers.authorization;
    if (!token) return resHandler(ctx, 400, "token not provided", false);
    let user = jwt.verify(token, process.env.JWT_SECRET);
    console.log("usertoken", user);
    if (!user) return resHandler(ctx, 400, "invalid token", false);

    ctx.state.user = user;
    await next();
  } catch (error) {
    console.log("tokenMiddleware", error);
  }
};

module.exports = { tokenMiddleware };
