import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import promise from "redux-promise-middleware";
import { userReducer } from "./reducers/userReducers";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, promise));
