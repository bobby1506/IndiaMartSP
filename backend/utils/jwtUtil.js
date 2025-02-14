const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  try {
    console.log("generateToken",user)
    const token = jwt.sign(
      { _id: user._id, email: user.email, userName: user.userName,isSeller:user.isSeller },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return token;
  } catch (error) {
    console.log("generateToken", error);
    return null;
  }
};

module.exports = { generateToken };
