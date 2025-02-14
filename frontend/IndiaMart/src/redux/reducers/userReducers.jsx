import {
  REGISTER_PENDING,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
  LOGIN_FULFILLED,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  GETUSER_FULFILLED,
  GETUSER_PENDING,
  GETUSER_REJECTED,
  LOGOUT_FULFILLED,
  LOGOUT_REJECTED,
  LOGOUT_PENDING,
} from "../constants/userContants";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  message: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
    case LOGIN_PENDING:
    case GETUSER_PENDING:
    case LOGOUT_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case REGISTER_FULFILLED:
    case LOGIN_FULFILLED:
    case GETUSER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.data.data,
        message: action.payload.data?.message || "Success",
      };
    case LOGOUT_FULFILLED:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: null,
        message: "User logout successfully",
      };
    case REGISTER_REJECTED:
    case LOGIN_REJECTED:
    case GETUSER_REJECTED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload.data?.message || "Error",
      };
    case LOGOUT_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload.data?.message || "Error",
      };

    case "EMPTY_MSSG":
      return {
        ...state,
        message: null,
      };
    case "EMPTY_ERROR":
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
