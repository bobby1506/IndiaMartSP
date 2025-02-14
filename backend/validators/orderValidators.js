const { isEmpty, isValidEmail, isValidMobile } = require("../shared/authShare");

const addressValidator = (ctx) => {
  const { address } = ctx.request.body;
  const emptyError = isEmpty(address);
  if (emptyError) return emptyError;
  else if (address.length < 10 && address.length > 50)
    return {
      field: "address",
      message: "please enter the address length between 10 to 50",
    };
  ctx.state.shared = { ...(ctx.state.shared ?? {}), address };
  return null;
};

const shippingDetailsValidator = (ctx) => {
  const { shippingDetails } = ctx.request.body;
  const emptyError = isEmpty(shippingDetails);
  if (emptyError) return emptyError;
  else if (shippingDetails.length < 10 && shippingDetails.length > 50)
    return {
      field: "shippingDetails",
      message: "please enter the shippingDetails length between 10 to 50",
    };
  ctx.state.shared = { ...(ctx.state.shared ?? {}), shippingDetails };
  return null;
};

const shopAddressValidator = (ctx) => {
  const { shopAddress } = ctx.request.body;
  const emptyError = isEmpty(shopAddress);
  if (emptyError) return emptyError;
  else if (shopAddress.length < 10 && shopAddress.length > 50)
    return {
      field: "shopAddress",
      message: "please enter the shopAddress length between 10 to 50",
    };
  ctx.state.shared = { ...(ctx.state.shared ?? {}), shopAddress };
  return null;
};

const productListValidator = (ctx) => {
  const { products } = ctx.request.body;
  products.forEach((element) => {
    const emptyError = isEmpty(element.productName);
    if (emptyError) return emptyError;
    if (element.quantity <= 0)
      return {
        field: "products",
        message: "product quantity should be greater than 0",
      };
  });
  ctx.state.shared = { ...(ctx.state.shared ?? {}), products };
  return null;
};

const mobileNumberValidator = (ctx) => {
  const { mobile } = ctx.request.body;
  if (!isValidMobile(mobile)) {
    return {
      field: "mobile",
      message: "enter a valid mobile number",
    };
  }
  ctx.state.shared = { ...(ctx.state.shared ?? {}),mobile };
};

const shopNameValidator = (ctx) => {
  const { shopName } = ctx.request.body;
  const emptyError = isEmpty(shopName, "shopName");
  if (emptyError) return emptyError;
  ctx.state.shared = {
    ...(ctx.state.shared ?? {}),
    shopName,
  };
  return null;
};

module.exports = {
  addressValidator,
  shopAddressValidator,
  productListValidator,
  shippingDetailsValidator,
  shopNameValidator,
  mobileNumberValidator,
};
