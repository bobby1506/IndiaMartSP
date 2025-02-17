/* eslint-disable no-undef */
import axios from "axios";
import { url } from "../../apiConfig";
import { getToken } from "../../shared/localStorage";

export const createOrder = (orderData, sellerId) => async (dispatch) => {
  dispatch({
    type: "CREATE_ORDER",
    payload: axios.post(`${url}createOrder/${sellerId}`, orderData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
    }),
  });
};

// export const getOrder = () => async (dispatch) => {
//   dispatch({
//     type: "GET_ORDER",
//     payload: axios.get(`${url + "getOrder"}`, {
//       headers: { Authorization: getToken() },
//     }),
//   });
// };

export const getOrderSeller = () => async (dispatch) => {
  dispatch({
    type: "GET_SELLER_ORDER",
    payload: axios.get(`${url + "getsellerorders"}`, {
      headers: { Authorization: getToken() },
    }),
  });
};

export const getOrderUser = () => async (dispatch) => {
  dispatch({
    type: "GET_ORDERR",
    payload: axios.get(`${url + "getuserorders"}`, {
      headers: { Authorization: getToken() },
    }),
  });
};

export const approveOrder = (orderId) => async (dispatch) => {
  console.log(getToken(), "gettoken");
  dispatch({
    type: "APROOVE_ORDER",
    payload: axios.post(
      `${url}approveorder/${orderId}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      }
    ),
  });
};
