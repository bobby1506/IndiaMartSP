import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import promise from "redux-promise-middleware";
import { userReducer } from "./reducers/userReducers";
import { sellerReducer } from "./reducers/sellerReducers";
import { orderReducers } from "./reducers/orderReducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  user: userReducer,
  seller: sellerReducer,
  order: orderReducers,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, promise))
);
