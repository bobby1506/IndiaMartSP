const {
  createOrders,
  getUserOrders,
  getOrders,
  approveOrders,
} = require("../queries/orderQuery");
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
      isApproved: false,
    };
    console.log(orderData);
    const order = await createOrders(orderData);
    if (!order?.acknowledged) {
      return resHandler(ctx, 500, "order Creation failed", false);
    }
    resHandler(ctx, 201, "order created", true);
  } catch (error) {
    console.log("createOrder", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

//seller Orders
const sellerOrders = async (ctx) => {
  try {
    const { _id } = ctx.state.user;
    const sellerOrders = await getOrders(_id);
    if (!sellerOrders) return resHandler(ctx, 400, "orders not fetched", false);
    resHandler(ctx, 200, "orders fetched successfully", true, sellerOrders);
  } catch (error) {
    console.log("sellerIOrders", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

//user Orders
const userOrders = async (ctx) => {
  try {
    console.log("userOrders");
    const { _id } = ctx.state.user;
    console.log("id", _id);
    const userOrders = await getUserOrders(_id);
    console.log("userOrders", userOrders);
    if (!userOrders) return resHandler(ctx, 400, "orders not fetched", false);
    resHandler(ctx, 200, "orders fetched successfully", true, userOrders);
  } catch (error) {
    console.log("userOrders", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

//approve order
const approveOrder = async (ctx) => {
  try {
    const { orderId } = ctx.params;
    const sellerOrders = await approveOrders(orderId);
    if (!sellerOrders) return resHandler(ctx, 400, "order not approved", false);
    if(!sellerOrders.modifiedCount) return resHandler(ctx,500,"not updated",false)
    resHandler(ctx, 200, "orders approved successfully", true);
  } catch (error) {
    console.log("approveOrder", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

module.exports = { createOrder, sellerOrders, userOrders, approveOrder };
