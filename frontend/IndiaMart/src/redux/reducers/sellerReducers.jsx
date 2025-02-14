import {
  GETSELLER_FULFILLED,
  GETSELLER_PENDING,
  GETSELLER_REJECTED,
} from "../constants/sellerConstants";

const initialState = {
  seller: null,
  isLoading: false,
  error: null,
  message: null,
};

export const sellerReducer = (state = initialState, action) => {
  console.log(action.payload?.data?.data);
  switch (action.type) {
    case GETSELLER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        seller: action.payload?.data?.data,
        message: action.payload?.data?.message,
        error: null,
      };

    case GETSELLER_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GETSELLER_REJECTED:
      return {
        ...state,
        isLoading: false,
        seller: null,
        error: action.payload?.data?.message,
      };
    default:
      return {
        ...state,
      };
  }
};
