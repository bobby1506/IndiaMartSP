import {
  APROOVE_ORDER_FULFILLED,
  APROOVE_ORDER_PENDING,
  APROOVE_ORDER_REJECTED,
  CREATE_ORDER_FULFILLED,
  CREATE_ORDER_PENDING,
  CREATE_ORDER_REJECTED,
  GET_ORDERR_FULFILLED,
  GET_ORDERR_PENDING,
  GET_ORDERR_REJECTED,
  GET_SELLER_ORDER_FULFILLED,
  GET_SELLER_ORDER_PENDING,
  GET_SELLER_ORDER_REJECTED,
} from "../constants/orderConstants";

const initialState = {
  isLoading: false,
  error: null,
  message: null,
  orders: null,
};

export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_FULFILLED:
    case GET_ORDERR_FULFILLED:
    case GET_SELLER_ORDER_FULFILLED:
      alert("first");
      return {
        ...state,
        isLoading: false,
        orders: action.payload?.data?.data,
        message: action.payload?.data?.message || "Success",
        error: null,
      };
    case CREATE_ORDER_PENDING:
    case GET_ORDERR_PENDING:
    case GET_SELLER_ORDER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ORDER_REJECTED:
    case GET_ORDERR_REJECTED:
    case GET_SELLER_ORDER_REJECTED:
      return {
        ...state,
        isLoading: false,
        orders: null,
        error: action.payload?.data?.error || "Error",
        message: null,
      };
    case APROOVE_ORDER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        message: action.payload?.data?.message || "Success",
        error: null,
      };
    case APROOVE_ORDER_REJECTED:
      return {
        ...state,
        isLoading: false,
        message: null,
        error: action.payload?.data?.message || "Error",
      };
    case APROOVE_ORDER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
