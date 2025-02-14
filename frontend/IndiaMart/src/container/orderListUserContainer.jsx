import { connect } from "react-redux";
import { getOrderUser } from "../redux/actions/orderActions";
import OrderListUser from "../components/UserDashboard/orderListUser";

const mapStateToProps = (state) => ({
  orderUser: state.order?.orders,
});

const mapDispatchToProp = (dispatch) => ({
  getOrderUser: () => dispatch(getOrderUser()),
});

export default connect(mapStateToProps, mapDispatchToProp)(OrderListUser);
