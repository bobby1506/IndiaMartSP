/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUpContainer from "./container/signUpContainer";
import { useEffect } from "react";
import { getToken, setToken } from "./shared/localStorage";
import SignInContainer from "./container/signInContainer";
import ProtectedRoute from "./components/Auth/protectedRoute";
import UserScreen from "./pages/UserScreen";
import SellerDashboard from "./pages/SellerDashboard";
import Main from "./components/layout/Main";
import Seller from "./components/layout/Seller";

const App = ({ user, getUser }) => {
  const navigate = useNavigate();
  const userToken = getToken();
  console.log(userToken, "userToken");
  useEffect(() => {
    if (userToken) {
      getUser();
    }
  }, []);

  useEffect(() => {
    if (user?.user?.token) {
      setToken(user.user.token);
    }
    if (userToken && user?.user?.data?.isSeller) {
      navigate("/sellerDashboard");
    } else if (userToken && !user?.user?.data?.isSeller) {
      navigate("/");
    } else if (!userToken) {
      navigate("/login");
    }
  }, [user, userToken]);

  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUpContainer />} />
        <Route path="/login" element={<SignInContainer />} />
        <Route
          path="/"
          element={<ProtectedRoute element={<Main> {<UserScreen />}</Main>} />}
        />
        <Route
          path="/sellerDashboard"
          element={<Seller>{<SellerDashboard />}</Seller>}
        />
      </Routes>
    </>
  );
};

export default App;
