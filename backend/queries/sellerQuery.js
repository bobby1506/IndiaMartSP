const { client } = require("../config/dbConfig");

const userCollection = client.db(process.env.DB_NAME).collection("users");

const getSeller = async () =>
  await userCollection
    .find({ isSeller: true }, { projection: { _id: 1, userName: 1, email: 1 } })
    .toArray();

module.exports = { getSeller };
