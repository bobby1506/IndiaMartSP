import { getToken } from "../../shared/localStorage";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const userToken = getToken();
  return userToken ? element : navigate("/login");
};

export default ProtectedRoute;
