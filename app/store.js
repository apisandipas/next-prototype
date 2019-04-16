import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";

export const makeStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};
