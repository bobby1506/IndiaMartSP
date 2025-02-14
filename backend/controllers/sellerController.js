const { getOrders } = require("../queries/orderQuery");
const { getSeller } = require("../queries/sellerQuery");
const { resHandler } = require("../shared/resHandler");

//seller list
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

//seller Orders
const sellerOrders=async(ctx)=>{
  try{
     const {_id}=ctx.state.user;
     const sellerOrders=getOrders(_id);
     if(!sellerOrders)return resHandler(ctx,400,"orders not fetched",false)
     resHandler(ctx,200,"orders fetched successfully",true,sellerOrders)
  }catch(error){

  }
}

module.exports = { sellerList };
