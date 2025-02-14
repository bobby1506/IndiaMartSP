import { connect } from "react-redux";
import sellerList from "../components/UserDashboard/sellerList";
import { getSeller } from "../redux/actions/sellerActions";

const mapStateToProps = () => (state) => (
  console.log(state.seller),
  {
    seller: state.seller || {},
  }
);

const mapDispatchToProps = () => (dispatch) => ({
  getSeller: () => dispatch(getSeller()),
});

export default connect(mapStateToProps, mapDispatchToProps)(sellerList);
