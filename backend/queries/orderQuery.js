const {client}=require('../config/dbConfig')

const orderCollection=client.db(process.env.DB_NAME).collection('orders')

const createOrders=async(orderData)=>await orderCollection.insertOne(orderData)
const getOrders=async(id)=>await orderCollection.find({sellerId:id.toString()}).toArray()

module.exports={createOrders,getOrders}