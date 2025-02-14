import { connect } from "react-redux";
import { logout } from "../redux/actions/userActions";
import CustomNavbar from "../components/layout/Navbar";

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(CustomNavbar);
