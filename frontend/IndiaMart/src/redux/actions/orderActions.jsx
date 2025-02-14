/* eslint-disable no-undef */
import axios from "axios";
import { url } from "../../apiConfig";
import { getToken } from "../../shared/localStorage";

export const createOrder = (orderData, sellerId) => async (dispatch) => {
  dispatch({
    type: "CREATE_ORDER",
    payload: axios.post(`${url} + createOrder/${sellerId}`, orderData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
    }),
  });
};

export const getOrder = () => async (dispatch) => {
  dispatch({
    type: "GET_ORDER",
    payload: axios.get(`${url} + getOrder`, {
      headers: { Authorization: getToken() },
    }),
  });
};
