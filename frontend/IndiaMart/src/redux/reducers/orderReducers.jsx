import {
  CREATE_ORDER_FULFILLED,
  CREATE_ORDER_PENDING,
  CREATE_ORDER_REJECTED,
  GET_ORDER_FULFILLED,
  GET_ORDER_PENDING,
  GET_ORDER_REJECTED,
} from "../constants/orderConstants";

// export const orderReducer =
const initialState = {
  isLoading: false,
  error: null,
  message: null,
  orders: null,
};

export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_FULFILLED:
    case GET_ORDER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        orders: action.payload?.data?.orders,
        message: action.payload?.data?.message || "Success",
        error: null,
      };
    case CREATE_ORDER_PENDING:
    case GET_ORDER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ORDER_REJECTED:
    case GET_ORDER_REJECTED:
      return {
        ...state,
        isLoading: false,
        orders: null,
        error: action.payload?.data?.error || "Error",
        message: null,
      };
    default:
      return {
        ...state,
      };
  }
};
