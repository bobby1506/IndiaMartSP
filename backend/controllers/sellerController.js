const { getOrders } = require("../queries/orderQuery");
const { getSeller } = require("../queries/sellerQuery");
const { resHandler } = require("../shared/resHandler");

//seller list
const sellerList = async (ctx) => {
  try {
    let sellers = await getSeller();
    console.log(sellers, "Sellers");
    resHandler(ctx, 200, "sellers fetched", true, (data = sellers));
  } catch (error) {
    console.log("sellerList", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};



//approve Orders



module.exports = { sellerList};
