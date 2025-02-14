import { url } from "../../apiConfig";
import { getToken } from "../../shared/localStorage";

export const getSeller = () => (dispatch) => {
  dispatch({
    type: "GETSELLER",
    payload: axios.get(`${url} + getSeller`, {
      headers: { Authorization: getToken() },
    }),
  });
};
