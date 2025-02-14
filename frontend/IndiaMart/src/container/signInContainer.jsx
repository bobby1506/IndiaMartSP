import { connect } from "react-redux";
import { login } from "../redux/actions/userActions";
import SignIn from "../components/Auth/Login/SignIn";

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
});

export default connect(null, mapDispatchToProps)(SignIn);
