import { connect } from "react-redux";
import SignupForm from "../components/Auth/SignUp/signUp";
import { register } from "../redux/actions/userActions";

const mapDispatchToProps = (dispatch) => ({
  register: (userData) => dispatch(register(userData)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
