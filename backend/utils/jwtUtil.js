const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  try {
    const token = jwt.sign(
      { id: user.id, email: user.email, userName: user.userName,isSeller:user.isSeller },
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
