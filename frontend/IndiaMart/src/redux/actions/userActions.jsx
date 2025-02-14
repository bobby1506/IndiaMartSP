import axios from "axios";
import { url } from "../../apiConfig";
import { getToken } from "../../shared/localStorage";

export const register = (userData) => async (dispatch) => {
  dispatch({
    type: "REGISTER",
    payload: axios.post(`${url + "register"}`, userData, {
      headers: { "Content-Type": "application/json" },
    }),
  });
};

export const login = (userData) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: axios.post(`${url + "login"}`, userData, {
      headers: { "Content-Type": "application/json" },
    }),
  });
};

export const getUser = () => async (dispatch) => {
  dispatch({
    type: "GETUSER",
    payload: axios.get(`${url + "getuser"}`, {
      headers: { Authorization: getToken() },
    }),
  });
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
