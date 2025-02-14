/* eslint-disable react/prop-types */
import { getToken } from "../../shared/localStorage";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const userToken = getToken();
  return userToken ? element : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
