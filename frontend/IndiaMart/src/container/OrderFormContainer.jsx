import { connect } from "react-redux";
import OrderForm from "../components/OrderForm/OrderForm";
import { createOrder } from "../redux/actions/orderActions";

const mapDisptachToProps = (dispatch) => ({
  createOrder: (orderData, sellerId) =>
    dispatch(createOrder(orderData, sellerId)),
});

export default connect(null, mapDisptachToProps)(OrderForm);
