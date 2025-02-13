const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.URI);

const connectDb = async () => {
  try {
    await client.connect();
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports={connectDb,client}
