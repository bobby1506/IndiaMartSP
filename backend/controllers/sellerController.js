const { getSeller } = require("../queries/sellerQuery");
const { resHandler } = require("../shared/resHandler");

const sellerList = async (ctx) => {
  try {
    let sellers = await getSeller();
    console.log(sellers, "Sellers");
    resHandler(ctx, 200, "sellers fetched", true, (data = { sellers }));
  } catch (error) {
    console.log("sellerList", error);
    resHandler(ctx, 500, "internal server error", false);
  }
};

module.exports = { sellerList };
