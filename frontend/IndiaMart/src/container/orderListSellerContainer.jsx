import { connect } from "react-redux";
import { approveOrder, getOrderSeller } from "../redux/actions/orderActions";
import orderListSeller from "../components/SellerDashboard/orderListSeller";

const mapStateToProps = (state) => (
  console.log(state.order.orders, "state.order"),
  {
    orderSeller: state.order?.orders,
  }
);

const mapDispatchToProp = (dispatch) => ({
  getOrderSeller: () => dispatch(getOrderSeller()),
  approveOrder: (orderId) => dispatch(approveOrder(orderId)),
});

export default connect(mapStateToProps, mapDispatchToProp)(orderListSeller);
