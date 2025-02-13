const bcrypt = require("bcrypt");
const { client } = require("../config/dbConfig");
const {
  isEmpty,
  isValidEmail,
  isValidPassword,
} = require("../shared/authShare");
const userCollection = client.db(process.env.DB_NAME).collection("users");

const emailValidator = (ctx) => {
  const { email } = ctx.request.body;
  const emptyError = isEmpty(email, "email");
  if (emptyError) return emptyError;
  if (!isValidEmail(email))
    return { field: "email", message: "Please enter a valid email" };
  ctx.state.shared = {
    ...(ctx.state.shared || {}),
    email,
  };
  return null;
};

const passwordValidator = (ctx) => {
  const { password } = ctx.request.body;
  const emptyError = isEmpty(password, "password");
  if (emptyError) return emptyError;
  if (!isValidPassword(password))
    return {
      field: "password",
      message: "Please enter a valid password with all the cases",
    };
  ctx.state.shared = {
    ...(ctx.state.shared || {}),
    password,
  };
  return null;
};

const userNameValidator = (ctx) => {
  const { userName } = ctx.request.body;
  const emptyError = isEmpty(userName, "userName");
  if (emptyError) return emptyError;
  ctx.state.shared = {
    ...(ctx.state.shared || {}),
    userName,
  };
  return null;
};

const sellerValidator = (ctx) => {
  const { isSeller } = ctx.request.body;
  if (!isSeller)
    return {
      field: "isSeller",
      message: "Please enter are you a seller or not",
    };
  ctx.state.shared = {
    ...(ctx.state.shared || {}),
    isSeller,
  };

  return null;
};

const isUserExistValidator = async (ctx) => {
  const { email } = ctx.request.body;
  const user = await userCollection.findOne({ email });
  if (user) return { field: "user", message: "user already exist" };
  return null;
};

module.exports = {
  emailValidator,
  passwordValidator,
  userNameValidator,
  sellerValidator,
  isUserExistValidator,
};
