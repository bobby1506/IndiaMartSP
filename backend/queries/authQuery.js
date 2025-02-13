const { client } = require("../config/dbConfig");

const userCollection = client.db(process.env.DB_NAME).collection("users");

const findUser = async (email) => await userCollection.findOne({ email });

const createUser = async (user) => await userCollection.insertOne(user);

module.exports={findUser,createUser}