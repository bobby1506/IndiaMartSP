import { connect } from "react-redux";
import { logout } from "../redux/actions/userActions";
import Sidebar from "../components/layout/Sidebar";

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Sidebar);
