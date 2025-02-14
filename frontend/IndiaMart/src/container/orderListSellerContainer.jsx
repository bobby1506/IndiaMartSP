import { connect } from "react-redux";
import { getOrderSeller } from "../redux/actions/orderActions";
import orderListSeller from "../components/SellerDashboard/orderListSeller";

const mapStateToProps = (state) => (
  console.log(state.order.orders, "state.order"),
  {
    orderSeller: state.order?.orders,
  }
);

const mapDispatchToProp = (dispatch) => ({
  getOrderSeller: () => dispatch(getOrderSeller()),
  getApproval: () => dispatch(getApproval()),
});

export default connect(mapStateToProps, mapDispatchToProp)(orderListSeller);
