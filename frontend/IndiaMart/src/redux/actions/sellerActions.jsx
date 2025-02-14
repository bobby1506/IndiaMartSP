import { url } from "../../apiConfig";
import { getToken } from "../../shared/localStorage";
import axios from "axios";

export const getSeller = () => (dispatch) => {
  dispatch({
    type: "GETSELLER",
    payload: axios.get(`${url + "getsellers"}`, {
      headers: { Authorization: getToken() },
    }),
  });
};
