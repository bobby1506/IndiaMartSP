const { createOrders } = require("../queries/orderQuery");
const { resHandler } = require("../shared/resHandler");

//createOrder
const createOrder = async (ctx) => {
  try {
    console.log(ctx.state.shared, "hiiiii");
    const {
      userName,
      email,
      mobile,
      shopName,
      address,
      shippingDetails,
      products,
      shopAddress,
    } = ctx.state.shared;

    console.log(userName);
    const { _id } = ctx.state.user;
    const { sellerId } = ctx.params;
    const orderData = {
      userName,
      email,
      mobile,
      shopName,
      address,
      shippingDetails,
      products,
      shopAddress,
      userId: _id,
      sellerId,
      isApproved:false
    };
    console.log(orderData);
    const order = await createOrders(orderData)
    if (!order?.acknowledged) {
      return resHandler(ctx, 500, "order Creation failed", false);
    }
    resHandler(ctx, 201, "user created", true);
  } catch (error) {
    console.log("createOrder", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

module.exports = { createOrder };
