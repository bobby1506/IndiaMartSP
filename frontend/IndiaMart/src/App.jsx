/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getToken, setToken } from "./shared/localStorage";
import RenderRoutes from "./components/routes/rederRoutes";
import { routeConfig } from "./components/routes/routeConfig";

const App = ({ user, getUser }) => {
  const navigate = useNavigate();
  console.log("user app.jsx waaala", user);
  const userToken = getToken();

  console.log("app challlllllllllllllll rahaaaaaa hai");
  useEffect(() => {
    console.log("om linr 16");
    if (userToken) {
      getUser();
    }
  }, []);

  useEffect(() => {
    console.log({ user });
    if (user?.user?.token) {
      setToken(user.user.token);
    }
    if (userToken && user?.user?.data?.isSeller) {
      navigate("/sellerDashboard");
    } else if (userToken && !user?.user?.data?.isSeller) {
      console.log("yaha bhi aaaya");
      // console.log(user, "userrrrrrrrrrrr");
      navigate("/");
    } else if (!userToken) {
      console.log("yaha aaayaa");
      navigate("/login");
    }
  }, [user, userToken]);

  return (
    <>
      <RenderRoutes routes={routeConfig} />
    </>
  );
};

export default App;
