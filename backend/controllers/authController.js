const bcrypt = require("bcrypt");
const { createUser, findUser } = require("../queries/authQuery");
const { generateToken } = require("../utils/jwtUtil");
const { resHandler } = require("../shared/resHandler");

//register user
const registerUser = async (ctx) => {
  try {
    const { userName, email, password, isSeller } = ctx.state.shared;
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = {
      userName,
      email,
      hashedpassword,
      isSeller,
    };
    const user = await createUser(newUser);
    if (!user?.acknowledged) {
      return resHandler(ctx, 500, "userCreation failed", false);
    }

    const userData = await findUser(email);

    const token = generateToken(userData);

    resHandler(ctx, 201, "user created", true, {
      token,
      userName,
      email,
      isSeller,
    });
  } catch (error) {
    console.log("registerUser", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

//login

const loginUser = async (ctx) => {
  try {
    const { email, password } = ctx.state.shared;
    const userData = await findUser(email);
    const isPasswordMatch = await bcrypt.compare(
      password,
      userData.hashedpassword
    );
    if (!isPasswordMatch) return resHandler(ctx, 400, "invalid details", false);

    const token = generateToken(userData);

    let user = {
      email,
      token,
      userName: userData.userName,
      isSeller: userData.isSeller,
    };

    resHandler(ctx, 200, "user fetched", true, user);
  } catch (error) {
    console.log("registerUser", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

//getuser

const getUser = async (ctx) => {
  try {
    let user = ctx.state.user;
    resHandler(ctx,200,"user fetched",true,user)
  } catch (error) {
    console.log("getUser", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

module.exports = { registerUser, loginUser, getUser };
