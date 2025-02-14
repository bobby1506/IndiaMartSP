const {client}=require('../config/dbConfig')

const orderCollection=client.db(process.env.DB_NAME).collection('orders')

const createOrders=async(orderData)=>await orderCollection.insertOne(orderData)

module.exports={createOrders}