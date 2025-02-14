const {client}=require('../config/dbConfig')

const orderCollection=client.db(process.env.DB_NAME).collection('orders')

const createOrders=async(orderData)=>await orderCollection.insertOne(orderData)
const getOrders=async(sellerId)=>await orderCollection.find({_id:sellerId}).toArray()

module.exports={createOrders,getOrders}