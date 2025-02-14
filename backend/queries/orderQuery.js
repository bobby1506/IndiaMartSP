const { client } = require("../config/dbConfig");

const orderCollection = client.db(process.env.DB_NAME).collection("orders");

const createOrders = async (orderData) =>
  await orderCollection.insertOne(orderData);
const getOrders = async (id) =>
  await orderCollection.find({ sellerId: id.toString() }).toArray();
const getUserOrders = async (id) =>
  await orderCollection.find({ userId: id.toString() }).toArray();
const approveOrders = async (orderId) =>
  await orderCollection.updateOne(
    { _id: orderId },
    { $set: { isApproved: true } }
  );

module.exports = { createOrders, getOrders, getUserOrders, approveOrders };
