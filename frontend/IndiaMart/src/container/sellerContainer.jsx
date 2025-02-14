import { connect } from "react-redux";
import sellerList from "../components/UserDashboard/sellerList";

const mapStateToProps = () => (state) => ({
  seller: state.seller || {},
});

const mapDispatchToProps = () => (dispatch) => ({
  getSeller: () => dispatch(getSeller()),
});

export default connect(mapStateToProps, mapDispatchToProps)(sellerList);
