import { connect } from "react-redux";
import App from "../App";
import { getUser } from "../redux/actions/userActions";

const mapStateToProps = (state) => ({
  user: state.user || null,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
